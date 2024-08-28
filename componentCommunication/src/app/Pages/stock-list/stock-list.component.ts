import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent {
  constructor(private Ser: ServiceService) {

  }
  stockList() {
    const message = 'Hello from stock component'
    this.Ser._messageSubject.next(message);
  }

}
