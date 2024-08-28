import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  _messageSubject: BehaviorSubject<string>;
  constructor() {
    this._messageSubject = new BehaviorSubject<string>('');
  }

  get message$() {
    return this._messageSubject.asObservable();
  }

}
