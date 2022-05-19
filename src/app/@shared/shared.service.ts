import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedService {

  private data: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  data$: Observable<any> = this.data.asObservable();

  constructor() { }

  setPageTitle(newData: string) {
    this.data.next(newData);
  }
}