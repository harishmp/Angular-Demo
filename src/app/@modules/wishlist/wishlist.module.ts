import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishlistRoutingModule } from './wishlist-routing.module';
import { WishlistComponent } from './wishlist/wishlist.component';
import { PokemonCardModule } from 'pokemon-card';


@NgModule({
  declarations: [
    WishlistComponent
  ],
  imports: [
    CommonModule,
    WishlistRoutingModule,
    PokemonCardModule
  ]
})
export class WishlistModule { }
