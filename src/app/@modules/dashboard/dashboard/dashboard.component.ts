import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { DataService } from 'src/app/@shared/services/data.service';
import {
  PokemonDetailbyName,
  PokemonList,
} from 'src/app/@shared/typed';
import { Add } from '../store/pokemon.actions';
import { selectWishlist } from '../store/pokemon.reducer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  // pokemon-card inputs
  filterkey!: string;
  pokemonList: PokemonDetailbyName[] = [];
  color = '#d3c9c9';

  result: PokemonDetailbyName[] = [];
  pokemonSearchResult: PokemonDetailbyName[] = [];
  pokemonGetAllResult: PokemonDetailbyName[] = [];
  pokemonListLength = 0;
  errorMessage!: string;

  // pagination
  offset: number = 0;
  length!: number;
  pageIndex!: number;
  pageSize: number = 10;
  pageSizeOptions: number[] = [10, 20, 50, 100];

  pokemonWishList$ = this.store.select(selectWishlist);

  constructor(
    private router: Router,
    private dataService: DataService,
    private store: Store<{ wishlist: number }>,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getPokemonList();
  }

  getPokemonList(pageSize: number = 10, offset: number = 0) {
    this.dataService
      .getPokeApiList(pageSize, offset)
      .subscribe((listresponse: any) => {
        listresponse.results.map((item: any) => {
          return new PokemonList(item.name, item.url);
        });
        listresponse.results.map((item: any) => {
          this.pokemonGetAllResult = [];
          this.result = [];
          this.pokemonGetAllResult = this.getPokemonInDetail(item.name);
          this.pokemonList = this.pokemonGetAllResult;
        });
        this.pokemonListLength = listresponse.count;
        this.length = this.pokemonListLength;
      });
  }

  applySearch(searchValue: any) {
    this.length = 0;
    this.result = [];
    this.pokemonSearchResult = [];
    this.pokemonSearchResult = this.getPokemonInDetail(searchValue);
    this.pokemonList = this.pokemonSearchResult;
  }

  getPokemonInDetail(name: string): PokemonDetailbyName[] {
    this.dataService.getPokeApiDetail(name).subscribe(
      async (detailresponse: any) => {
        let checkStoreWishlist = await this.pokemonWishList$
          .pipe(take(1))
          .toPromise();
          checkStoreWishlist = checkStoreWishlist.some((item: any) => item.id === detailresponse.id);
        this.result.push(
          new PokemonDetailbyName(
            detailresponse.name,
            detailresponse.id,
            detailresponse.sprites,
            this.color = checkStoreWishlist ? 'deeppink' : '#d3c9c9'
          )
        );
        this.result = this.result.sort((a, b) => a.id - b.id);
      },
      (err) => {
        this.pokemonList = [];
        this.length = 0;
        this.errorMessage = `${err.error}: Please enter a valid name`;
        this.openSnackBar(err.error);
        return;
      }
    );
    this.openSnackBar('Data found Successfully!!!');
    return this.result;
  }

  redirecttoDetailPage(data: PokemonDetailbyName) {
    this.router.navigate([`pokemon-detail-page/${data.id}`]);
  }

  async addtoWishlist($event: PokemonDetailbyName) {
    this.checkWishlistStore($event.id).then(res => {
      this.store.dispatch(
        Add({ name: $event.name, id: $event.id, sprites: $event.sprites })
      );
      this.checkWishlistStore($event.id).then(res => {
        this.pokemonList.forEach((item: any) => {
          if (item.id === res.id) {
            item.color = 'deeppink'
          }
        });
      });
      this._snackBar.open('Successfully added to wishlist', 'close', {
        duration: 2500,
      });
    });
  }

  async checkWishlistStore(id: number) {
    let checkStoreWishlist = await this.pokemonWishList$
      .pipe(take(1))
      .toPromise();
    checkStoreWishlist = checkStoreWishlist.filter(
      (item: PokemonDetailbyName) => item.id == id
    );
    return checkStoreWishlist[0];
  }

  // pagination event
  getServerData(event?: PageEvent) {
    this.pageIndex = event?.pageIndex as number;
    this.pageSize = event?.pageSize as number;
    this.offset = (event?.pageIndex as number) * this.pageSize;
    this.result = [];
    this.pokemonList = [];
    this.getPokemonList(this.pageSize, this.offset);
  }

  // Filter result view handler
  applyfilter(filterValue: string) {
    this.filterkey = filterValue;
  }

  clearSearch() {
    this.length = this.pokemonListLength;
    this.pokemonSearchResult = [];
    this.filterkey = '';
    this.pokemonList = this.pokemonGetAllResult;
  }

  openSnackBar(text: string) {
    this._snackBar.open(text, 'close', {
      duration: 2500,
    });
  }
}
