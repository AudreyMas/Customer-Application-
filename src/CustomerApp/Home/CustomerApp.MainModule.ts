import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms"
import {RouterModule} from "@angular/router"
import { MasterPageComponent } from './CustomerApp.MasterPageComponent';
import { HomeComponent } from './CustomerApp.HomeComponent';
import { MainRoutes } from '../Routing/CustomerApp.MainRouting';
import { DbLogger, BaseLogger, ConsoleLogger } from '../Utility/CustomerApp.Logger';
import { HttpModule } from '@angular/http'

var providerscoll:any = []; 
// http call get this from the server (push the colleciton)
// the client decides which object they want to inject
providerscoll.push({ provide: "1", useClass: DbLogger }); // Tokens injections
providerscoll.push({ provide: "2", useClass: ConsoleLogger });
providerscoll.push({ provide: BaseLogger, useClass: ConsoleLogger });

@NgModule({
  declarations: [
      MasterPageComponent,
      HomeComponent
  ],
  imports: [
    RouterModule.forRoot(MainRoutes),
    BrowserModule,FormsModule,HttpModule
  ],
  providers: [providerscoll] // conditions of providers 
,
  bootstrap: [MasterPageComponent]
})
export class MainModule { }
