import { Component } from '@angular/core';
import {BaseLogger} from "../Utility/CustomerApp.Logger"

@Component({
  templateUrl: './CustomerApp.HomeView.html'
})
export  class HomeComponent {
  Logobj : BaseLogger = null;// whithout BaseLogger we dont know where the object comes from
  constructor(_logger : BaseLogger){ 
    this.Logobj = _logger;
    this.Logobj.Log();
  }
}

