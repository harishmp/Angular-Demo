import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishlistRoutingModule } from './wishlist-routing.module';
import { WishlistComponent } from './wishlist/wishlist.component';
import { PokemonCardModule } from 'pokemon-card';
import { DialogComponent } from './dialog/dialog.component';
import { MaterialModule } from 'src/app/@shared/material.module';


@NgModule({
  declarations: [
    WishlistComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    WishlistRoutingModule,
    PokemonCardModule,
    MaterialModule
  ]
})
export class WishlistModule { }
