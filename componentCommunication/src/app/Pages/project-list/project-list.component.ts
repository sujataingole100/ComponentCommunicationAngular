import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {
  latestMessage: string = '';
  name: string = '';
  view: string = '';

  private messageSubscription!: Subscription;

  constructor(private messageService: ServiceService, private route: ActivatedRoute, private router: Router) {
    this.messageSubscription = this.messageService.message$.subscribe((message: any) => {
      this.latestMessage = message;
    });

    this.route.queryParams.subscribe((queryParams: any) => {
      this.name = queryParams['name'];
      this.view = queryParams['view'];

    })

  }
  projectList() {
    const message = 'Hello from Project list component'
    this.messageService._messageSubject.next(message);
  }
}
