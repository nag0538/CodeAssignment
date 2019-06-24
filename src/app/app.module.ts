import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { OrderComponent } from './order/order.component';
import { LoginComponent } from './login/login.component';
import { AddorderComponent } from './order/addorder/addorder.component';
import { EditorderComponent } from './order/editorder/editorder.component';

import {UIRouterModule} from "@uirouter/angular";
import {RouterModule  } from '@angular/router';

const STATES = [
 { name: 'login', url: '/login',  component: LoginComponent },
 { name: 'order', url: '/order',  component: OrderComponent }
]



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OrderComponent,
    AddorderComponent,
    EditorderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    NgbModule,
    RouterModule,
    UIRouterModule.forRoot({ states: STATES, useHash: true,otherwise:'/login' })
  ],
  entryComponents:[ AddorderComponent,EditorderComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
