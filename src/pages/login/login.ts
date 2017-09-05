import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsControllerPage } from "../tabs-controller/tabs-controller";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }
  goToInicial(params){
    if (!params) params = {};
    this.navCtrl.push(TabsControllerPage);
  }
}
