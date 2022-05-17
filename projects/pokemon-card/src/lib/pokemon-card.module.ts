import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { PokemonCardComponent } from './pokemon-card.component';



@NgModule({
  declarations: [
    PokemonCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      {path: '', component: PokemonCardComponent}
    ])
  ],
  exports: [
    PokemonCardComponent
  ]
})
export class PokemonCardModule { }
