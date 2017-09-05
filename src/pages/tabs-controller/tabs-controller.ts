import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InicialPage } from '../inicial/inicial';
import { RegistroDeHorasPage } from '../registro-de-horas/registro-de-horas';
import { ControlarPontoDePartidaPage } from '../controlar-ponto-de-partida/controlar-ponto-de-partida';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = InicialPage;
  tab2Root: any = RegistroDeHorasPage;
  tab3Root: any = ControlarPontoDePartidaPage;
  constructor(public navCtrl: NavController) {
  }
  
}
