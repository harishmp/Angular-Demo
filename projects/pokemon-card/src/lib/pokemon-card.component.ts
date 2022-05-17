import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokemonDetailLocalStorage } from './typed';

@Component({
  selector: 'lib-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  @Input() dataList!: any[];
  @Input() addedToWishlist!: string;
  @Input() filterkey!: string;

  @Output() onclickEventfirsticon = new EventEmitter();
  @Output() onclickEventsecondicon = new EventEmitter();
  @Output() onclickEventredirect = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onclickFirsticon(data: PokemonDetailLocalStorage) {
    this.onclickEventfirsticon.emit(data);
  }

  onclickSecondicon(data: PokemonDetailLocalStorage) {
    this.onclickEventsecondicon.emit(data);
  }

  redirecttoDetailPage(data: PokemonDetailLocalStorage) {
    this.onclickEventredirect.emit(data);
  }

}
