import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PokemonDetailbyName } from 'src/app/@shared/typed';
import { Remove } from '../../dashboard/store/pokemon.actions';
import { selectWishlist } from '../../dashboard/store/pokemon.reducer';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  pokemonWishList$ = this.store.select(selectWishlist);

  constructor(private router: Router, public _snackBar: MatSnackBar, private store: Store) { 
  }

  ngOnInit(): void { }

  redirecttoDetailPage(data: PokemonDetailbyName){
    this.router.navigate([`pokemon-detail-page/${data.id}`]);
  }

  deletefromPersonallist($event: PokemonDetailbyName) {
    this.store.dispatch(Remove({ id: $event.id}));
    this._snackBar.open('Deleted from personal list', 'close', { duration: 2500 });
  }

}