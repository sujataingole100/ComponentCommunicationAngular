import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockListComponent } from './Pages/stock-list/stock-list.component';
import { PropertyListComponent } from './Pages/property-list/property-list.component';
import { ProjectListComponent } from './Pages/project-list/project-list.component';
import { MessageSenderComponent } from './Pages/message-sender/message-sender.component';
import { MessageReceiverComponent } from './Pages/message-receiver/message-receiver.component';
import { ParamDemoComponent } from './Pages/param-demo/param-demo.component';
import { QueryParamsDemoComponent } from './Pages/query-params-demo/query-params-demo.component';
import { ParentCompComponent } from './Pages/parent-comp/parent-comp.component';
import { ChildCompComponent } from './Pages/child-comp/child-comp.component';
import { NavbarComponent } from './Pages/navbar/navbar.component';

const routes: Routes = [
  {
    path: 'stock',
    component: StockListComponent
  },
  {
    path: 'property',
    component: PropertyListComponent
  },
  {
    path: 'project',
    component: ProjectListComponent
  },
  {
    path: 'sendMessage/:id/:name',
    component: MessageSenderComponent
  },
  {
    path: 'receiveMessage',
    component: MessageReceiverComponent
  },
  {
    path: 'paramDemo/:id',
    component: ParamDemoComponent
  },
  {
    path: 'queryParams',
    component: QueryParamsDemoComponent
  },
  {
    path:'navbar',
    component:NavbarComponent
  },
  {
    path: 'parent',
    component: ParentCompComponent,
    children: [
      {
        path: 'child',
        component: ChildCompComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
