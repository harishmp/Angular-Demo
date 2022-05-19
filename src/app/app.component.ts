import { Component } from '@angular/core';
import { SharedService } from './@shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Demo';

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.setPageTitle(this.title);
    this.sharedService.data$.subscribe(res => this.title = res);
  }
}
