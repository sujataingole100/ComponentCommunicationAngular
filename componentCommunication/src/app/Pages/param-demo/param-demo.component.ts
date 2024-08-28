import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-param-demo',
  templateUrl: './param-demo.component.html',
  styleUrls: ['./param-demo.component.css']
})
export class ParamDemoComponent {
  userId: string = ''
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe((param: any) => {
      this.userId = param['id'];
    })
    const productId = this.route.snapshot.params['id']; //This is useful when you only need to access the parameters once when the component is initialized.

    this.route.paramMap.subscribe((paramMap: any) => {
      this.userId = paramMap.get('id');// You can get this using paramMap
    });
  }
  ParamDemoNavigate(param: string) {
    this.router.navigate(['/paramDemo', param])
  }
}
