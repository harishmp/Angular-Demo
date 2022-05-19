import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './@components/sidenav/sidenav.component';
import { HomeComponent } from './@components/home/home.component';
import { StoreModule } from '@ngrx/store';
import { pokemonReducer } from './@modules/dashboard/store/pokemon.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MaterialModule } from 'src/app/@shared/material.module';
import { SharedService } from './@shared/shared.service';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot( pokemonReducer ),
    BrowserAnimationsModule,
    StoreDevtoolsModule.instrument()
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
