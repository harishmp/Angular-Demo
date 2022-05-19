import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { DataService } from 'src/app/@shared/services/data.service';
import {
  PokemonDetailbyName,
  PokemonDetailLocalStorage,
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
  pokemonList: any[] = [];
  result: any[] = [];
  searchResult: any[] = [];

  // pagination
  offset: number = 0;
  pageSize: number = 10;

  length!: number;
  pageSizeOptions: number[] = [10, 20, 50, 100];
  pageIndex!: number;

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
          this.dataService.getPokeApiDetail(item.name).subscribe(
            (detailresponse: any) => {
              this.result.push(
                new PokemonDetailbyName(
                  detailresponse.name,
                  detailresponse.id,
                  detailresponse.sprites
                )
              );
              this.pokemonList = [];
              this.pokemonList = this.result;
              this._snackBar.open('Data Initialized Successfully', 'close', {
                duration: 2500,
              });
            },
            (err) =>
              console.log('In Error Block---', err._body + ' ' + err.status)
          );
        });
        this.length = listresponse.count;
      });
  }

  redirecttoDetailPage(data: PokemonDetailLocalStorage) {
    this.router.navigate([`pokemon-detail-page/${data.id}`]);
  }

  async addtoWishlist($event: PokemonDetailLocalStorage) {
    let checkStoreWishlist = await this.pokemonWishList$
      .pipe(take(1))
      .toPromise();
    checkStoreWishlist = checkStoreWishlist.filter(
      (item: any) => item.id == $event.id
    );
    if (checkStoreWishlist && checkStoreWishlist.length == 0) {
      this.store.dispatch(
        Add({ name: $event.name, id: $event.id, sprites: $event.sprites })
      );
      this._snackBar.open('Successfully added to wishlist', 'close', {
        duration: 2500,
      });
    } else {
      this._snackBar.open('Already added to wishlist', 'close', {
        duration: 2500,
      });
    }
  }

  // pagination event
  getServerData(event?: PageEvent) {
    this.pageIndex = event?.pageIndex as number;
    this.pageSize = event?.pageSize as number;
    this.offset = (event?.pageIndex as number) * 10;
    this.result = [];
    this.pokemonList = [];
    this.getPokemonList(this.pageSize, this.offset);
  }

  // Search through API
  applySearch(searchValue: any) {
    if (searchValue.length > 0) {
      this.searchResult = [];
      this.dataService.getPokeApiDetail(searchValue).subscribe(
        (detailresponse: any) => {
          this.searchResult.push(
            new PokemonDetailbyName(
              detailresponse.name,
              detailresponse.id,
              detailresponse.sprites
            )
          );
          this.pokemonList = this.searchResult;
        },
        (err) => {
          console.log('In Error Block---', err._body + ' ' + err.status);
        }
      );
    }
  }

  // Filter result view handler
  applyfilter(filterValue: string) {
    this.filterkey = filterValue;
  }

  clearSearch() {
    // this.pageIndex = 0;
    this.filterkey = '';
    this.pokemonList = this.result;
  }
}
