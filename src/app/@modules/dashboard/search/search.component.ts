import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchkey!: string;
  filterkey!: string;

  @Output() onclickEventSearch = new EventEmitter();
  @Output() onclickEventFilter = new EventEmitter();
  @Output() onclickEventClear = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  // Search through API
  applySearch(searchValue: string) {
    this.onclickEventSearch.emit(searchValue);
  }

  // Filter result view handler
  applyfilter(filterValue: string) {
    this.onclickEventFilter.emit(filterValue);
  }

  clearSearch(){
    this.searchkey = '';
    this.onclickEventClear.emit();
  }

}
