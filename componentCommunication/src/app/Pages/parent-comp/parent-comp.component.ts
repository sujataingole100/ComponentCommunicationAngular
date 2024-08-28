import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildCompComponent } from '../child-comp/child-comp.component';

@Component({
  selector: 'app-parent-comp',
  templateUrl: './parent-comp.component.html',
  styleUrls: ['./parent-comp.component.css']
})
export class ParentCompComponent implements AfterViewInit {
  @ViewChild(ChildCompComponent)
  private ChildCompComponent!: ChildCompComponent;
  message: string = '';
  updatedMessage!: any;

  ngAfterViewInit(): void {
    this.message = this.ChildCompComponent.message;
    this.updatedMessage = this.ChildCompComponent.onChangeMessage();
  }
}
