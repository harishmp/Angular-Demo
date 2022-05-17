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
  personalData: any[] = [];

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
          this.personalData.push(new PokemonDetailbyName( 
            detailresponse.name,
            detailresponse.id,
            detailresponse.sprites)
          );
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

  deletefromPersonallist($event: PokemonDetailLocalStorage) {
    this.personalData = this.personalData.filter(item => item.id != $event.id);
    localStorage.setItem('personallist', JSON.stringify(this.personalData));
    // this.openSnackBar('Deleted from personal list', 'pizza-party');
  }

}
