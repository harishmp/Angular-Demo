import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/@shared/typed';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public person: Person = {
    name: 'Davis Warner'
  };

  public reassign(): void {
    this.person = {
      name: this.person.name
    };
  }

  constructor() { }

  ngOnInit(): void {
  }

}
