import { Component, OnDestroy } from '@angular/core';
import { MessageService } from '../Service/message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-message-sender',
  templateUrl: './message-sender.component.html',
  styleUrls: ['./message-sender.component.css']
})
export class MessageSenderComponent implements OnDestroy {

  data = 'Initial Data';
  sharedData!: string;
  subscriptionData!: Subscription

  constructor(private sharedService: MessageService) {
  }
  ngOnInit() {
    this.subscriptionData = this.sharedService.sharedData$
      .subscribe(sharedData => this.sharedData = sharedData);
  }

  updateData() {
    this.sharedService.sharedData.next(this.data);
  }

  ngOnDestroy(): void {
    this.subscriptionData.unsubscribe();
  }
}
