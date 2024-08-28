import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {
  constructor(private messageService: ServiceService, private router: Router, private route:ActivatedRoute) {

  }

  sendMessage() {
    const newMessage = 'Hello, how are you?';
    this.messageService._messageSubject.next(newMessage);

  }
  redirectUrl() {
    this.router.navigate(['/project']);
    this.router.navigateByUrl('/project');
  }

}
