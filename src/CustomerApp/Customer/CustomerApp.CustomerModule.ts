import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { RouterModule } from "@angular/router"
import { CustomerComponent } from './CustomerApp.CustomerComponent';
import { GridComponent } from '../Utility/CustomerApp.GridComponent';
import { CustomerRoutes } from '../Routing/CustomerApp.CustomerRouting';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor } from '../Utility/Utility.HttpInterceptor';



@NgModule({
  declarations: [
    CustomerComponent, GridComponent,
  ],
  imports: [
    RouterModule.forChild(CustomerRoutes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi:true } // interceptor has multi classes to intercept so add "multi:true"
  ],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
