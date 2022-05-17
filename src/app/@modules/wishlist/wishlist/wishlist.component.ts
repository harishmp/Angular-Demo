import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PokemonDetailLocalStorage } from '../typed';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  pokemonWishList: any[] = [];

  constructor(private router: Router, public snackBar: MatSnackBar) { 
  }

  ngOnInit(): void {
    let pokemonWishList1 = JSON.parse(localStorage.getItem("personallist") as string);
    pokemonWishList1.map((item: any) => {
      this.pokemonWishList.push(new PokemonDetailLocalStorage( 
        item.name,
        item.id,
        item.sprites)
      );
    });
  }

  redirecttoDetailPage(data: PokemonDetailLocalStorage){
    this.router.navigate([`pokemon-detail-page/${data.id}`]);
  }

  deletefromPersonallist($event: PokemonDetailLocalStorage) {
    this.pokemonWishList = this.pokemonWishList.filter(item => item.id != $event.id);
    localStorage.setItem('personallist', JSON.stringify(this.pokemonWishList));
    // this.openSnackBar('Deleted from personal list', 'pizza-party');
  }

}