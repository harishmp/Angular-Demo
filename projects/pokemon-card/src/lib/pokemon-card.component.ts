import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from './typed';

@Component({
  selector: 'lib-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  @Input() dataList!: Pokemon[];
  @Input() addedToWishlist!: string;
  @Input() filterkey!: string;

  @Output() onclickEventfirsticon = new EventEmitter();
  @Output() onclickEventsecondicon = new EventEmitter();
  @Output() onclickEventredirect = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onclickFirsticon(data: Pokemon) {
    this.onclickEventfirsticon.emit(data);
  }

  onclickSecondicon(data: Pokemon) {
    this.onclickEventsecondicon.emit(data);
  }

  redirecttoDetailPage(data: Pokemon) {
    this.onclickEventredirect.emit(data);
  }

}
