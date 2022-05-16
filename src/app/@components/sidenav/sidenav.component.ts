import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  public pages = [
    {name: 'Home', link:'home', icon: 'home'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
