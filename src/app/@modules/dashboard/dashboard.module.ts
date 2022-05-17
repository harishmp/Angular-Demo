import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PokemonCardModule } from 'pokemon-card';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../@shared/material.module';
import { DataModule } from '../../@shared/services/data.module';


@NgModule({
  declarations: [
    DashboardComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    DashboardRoutingModule,
    PokemonCardModule,
    DataModule
  ],
  providers: []
})
export class DashboardModule { }
