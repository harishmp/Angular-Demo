import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { DataService } from 'src/app/@shared/services/data.service';
import { PokemonDetailbyName, PokemonDetailLocalStorage, PokemonList } from 'src/app/@shared/typed';
import { Add } from '../store/pokemon.actions';
import { selectWishlist } from '../store/pokemon.reducer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
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

  pokemonWishList$ = this.store.select(selectWishlist);

  constructor(private router: Router,
    private dataService: DataService,
    private store: Store<{ wishlist: number }>) { }

  ngOnInit(): void {
    this.dataService.getPokeApiList(this.pageSize, this.offset).subscribe((listresponse: any) => {  
      listresponse.results.map((item: any) => {
        return new PokemonList( 
          item.name,
          item.url
        )
      });
      listresponse.results.map((item: any) => {
        this.dataService.getPokeApiDetail(item.name).subscribe((detailresponse: any) => { 
          this.result.push(new PokemonDetailbyName( 
            detailresponse.name,
            detailresponse.id,
            detailresponse.sprites)
          );
          this.pokemonList = this.result;
        }, err => console.log('In Error Block---', err._body + ' ' + err.status));
      });
    });
  }

  redirecttoDetailPage(data: PokemonDetailLocalStorage){
    this.router.navigate([`pokemon-detail-page/${data.id}`]);
  }

  async addtoWishlist($event: PokemonDetailLocalStorage) {
    let checkStoreWishlist = await this.pokemonWishList$.pipe(take(1)).toPromise();
    checkStoreWishlist = checkStoreWishlist.filter((item: any) => item.id == $event.id);
    if(checkStoreWishlist && checkStoreWishlist.length == 0) {
        this.store.dispatch(Add({name: $event.name, id: $event.id, sprites: $event.sprites}));
        // this.openSnackBar('Successfully added to wishlist', 'pizza-party');
      } else {
      // this.openSnackBar('Already added to wishlist', 'pizza-party');
    }
  }

  // Search through API
  applySearch(searchValue: any) {
    if(searchValue.length > 0) {
      this.searchResult = [];
      this.dataService.getPokeApiDetail(searchValue).subscribe((detailresponse: any) => { 
        this.searchResult.push(new PokemonDetailbyName( 
          detailresponse.name,
          detailresponse.id,
          detailresponse.sprites)
        );
        this.pokemonList = this.searchResult;
      },
      err => {
        console.log('In Error Block---', err._body + ' ' + err.status);
      });
    }
  }

  // Filter result view handler
  applyfilter(filterValue: string) {
    this.filterkey = filterValue;
  }

  clearSearch(){
    // this.pageIndex = 0;
    this.filterkey = '';
    this.pokemonList = this.result;
  }

}
