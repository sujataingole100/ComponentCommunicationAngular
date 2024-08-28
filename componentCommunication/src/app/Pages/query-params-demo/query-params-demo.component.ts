import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-query-params-demo',
  templateUrl: './query-params-demo.component.html',
  styleUrls: ['./query-params-demo.component.css']
})
export class QueryParamsDemoComponent {
  category!: string;
  sort!: string;
  name: string = '';
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((queryParams: any) => {
      this.category = queryParams['category'];
      this.sort = queryParams['sort'];
      console.log('this.category this.sort', this.category, this.sort)
    })
  }
  setQueryParam() {
    this.router.navigate(['/project'], { queryParams: { name: 'Sujata', view: 'project' } });
  }
}
