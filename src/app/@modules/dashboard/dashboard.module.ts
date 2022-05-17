import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { PokemonCardModule } from 'pokemon-card';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    DashboardComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    DashboardRoutingModule,
    PokemonCardModule
  ],
  providers: [DataService]
})
export class DashboardModule { }
