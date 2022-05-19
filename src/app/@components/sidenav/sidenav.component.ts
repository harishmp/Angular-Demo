import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  public pages = [
    {name: 'Home', link:'home', icon: 'home'},
    {name: 'Dashboard', link:'dashboard', icon: 'computer'},
    {name: 'Wishlist', link:'wishlist', icon: 'turned_in'},
    {name: 'change Detection', link:'change-detection', icon: 'edit'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
