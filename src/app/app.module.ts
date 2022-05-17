import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { SidenavComponent } from './@components/sidenav/sidenav.component';
import { HomeComponent } from './@components/home/home.component';
import { DashboardModule } from './@modules/dashboard/dashboard.module';
import { WishlistModule } from './@modules/wishlist/wishlist.module';

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
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
