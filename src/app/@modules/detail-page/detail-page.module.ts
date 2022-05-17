import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailPageRoutingModule } from './detail-page-routing.module';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { MaterialModule } from '../../@shared/material.module';
import { DataModule } from '../../@shared/services/data.module';

@NgModule({
  declarations: [
    DetailPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DetailPageRoutingModule,
    DataModule
  ]
})
export class DetailPageModule { }
