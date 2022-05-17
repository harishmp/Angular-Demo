import { NgModule } from '@angular/core';

import { DataService } from '../../@shared/services/data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
  ],
  imports: [
    HttpClientModule,
  ],
  providers: [DataService]
})
export class DataModule { }
