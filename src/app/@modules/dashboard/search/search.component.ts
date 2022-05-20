import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, filter, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  searchkey!: string;
  filterkey!: string;

  @Output() onclickEventSearch = new EventEmitter();
  @Output() onclickEventFilter = new EventEmitter();
  @Output() onclickEventClear = new EventEmitter();

  userQuestionUpdate = new Subject<string>();
  subscription: Subscription;

  constructor() {
    // Debounce search.
    this.subscription = this.userQuestionUpdate.pipe(
      filter(res => res.length > 3),
      debounceTime(2000))
      .subscribe(value => {
        this.searchkey = value;
        this.onclickEventSearch.emit(this.searchkey);
      });
  }

  ngOnInit(): void {
  }

  // Filter result view handler
  applyfilter(filterValue: string) {
    this.onclickEventFilter.emit(filterValue);
  }

  clearSearch(){
    this.searchkey = '';
    this.onclickEventClear.emit();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
