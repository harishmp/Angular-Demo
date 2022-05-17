import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './services/data.service';
import { PokemonDetailbyName, PokemonDetailLocalStorage, PokemonList } from './typed';

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

  constructor(private router: Router,
    private dataService: DataService) { }

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

  addtoWishlist($event: PokemonDetailLocalStorage) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist') as string);
    if(wishlist != null){
      let afterListfilter = wishlist.filter((item: any) => item.id == $event.id);
      if(afterListfilter.length == 0){
        wishlist.push($event)
        localStorage.setItem('wishlist', JSON.stringify(wishlist)); 
        // this.openSnackBar('Successfully added to wishlist', 'pizza-party');
      } else {
        // this.openSnackBar('Already added to wishlist', 'pizza-party');
      }
    } else {
      wishlist = [];
      wishlist.push($event)
      localStorage.setItem('wishlist', JSON.stringify(wishlist)); 
      // this.openSnackBar('Successfully added to Wishlist', 'pizza-party');
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
