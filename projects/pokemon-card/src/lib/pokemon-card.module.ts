import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilterdatalistPipe } from './@pipes/filterdatalist.pipe';
import { MaterialModule } from './material.module';
import { PokemonCardComponent } from './pokemon-card.component';



@NgModule({
  declarations: [
    PokemonCardComponent,
    FilterdatalistPipe
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
