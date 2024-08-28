import { AfterContentInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from '../Service/message.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-message-receiver',
  templateUrl: './message-receiver.component.html',
  styleUrls: ['./message-receiver.component.css']
})
export class MessageReceiverComponent implements OnInit {
  sharedData!: string;
  subscriptionData!: Subscription;
  user!: { id: string, name: string };
  constructor(private sharedService: MessageService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sharedService.sharedData$
      .subscribe(sharedData => {
        this.sharedData = sharedData;
        alert(this.sharedData);
      });
    this.getproject()
    // this.subscriptionData = this.sharedService.sharedData$
    //   .subscribe(sharedData => this.sharedData = sharedData);
    // console.log('this.sharedData', this.sharedData);
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }

  }

  getproject() {
    console.log('this.sharedData', this.sharedData);

  }
  ngOnDestroy(): void {
    this.subscriptionData.unsubscribe();
  }

}




