import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Person } from 'src/app/@shared/typed';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
  @Input() person!: Person;

  constructor() { }

  ngOnInit(): void {
  }

}
