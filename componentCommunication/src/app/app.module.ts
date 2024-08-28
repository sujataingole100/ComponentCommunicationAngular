import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockListComponent } from './Pages/stock-list/stock-list.component';
import { PropertyListComponent } from './Pages/property-list/property-list.component';
import { ProjectListComponent } from './Pages/project-list/project-list.component';
import { FormsModule } from '@angular/forms';
import { MessageSenderComponent } from './Pages/message-sender/message-sender.component';
import { MessageReceiverComponent } from './Pages/message-receiver/message-receiver.component';
import { ParamDemoComponent } from './Pages/param-demo/param-demo.component';
import { QueryParamsDemoComponent } from './Pages/query-params-demo/query-params-demo.component';
import { ParentCompComponent } from './Pages/parent-comp/parent-comp.component';
import { ChildCompComponent } from './Pages/child-comp/child-comp.component';
import { NavbarComponent } from './Pages/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    StockListComponent,
    PropertyListComponent,
    ProjectListComponent,
    MessageSenderComponent,
    MessageReceiverComponent,
    ParamDemoComponent,
    QueryParamsDemoComponent,
    ParentCompComponent,
    ChildCompComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
