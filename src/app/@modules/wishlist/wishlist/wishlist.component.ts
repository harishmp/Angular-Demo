import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PokemonDetailLocalStorage } from 'src/app/@shared/typed';
import { Remove } from '../../dashboard/store/pokemon.actions';
import { selectWishlist } from '../../dashboard/store/pokemon.reducer';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  pokemonWishList$ = this.store.select(selectWishlist);

  constructor(private router: Router, public snackBar: MatSnackBar, private store: Store) { 
  }

  ngOnInit(): void { }

  redirecttoDetailPage(data: PokemonDetailLocalStorage){
    this.router.navigate([`pokemon-detail-page/${data.id}`]);
  }

  deletefromPersonallist($event: PokemonDetailLocalStorage) {
    this.store.dispatch(Remove({ id: $event.id}));
    // this.openSnackBar('Deleted from personal list', 'pizza-party');
  }

}