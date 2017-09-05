import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { InicialPage } from '../pages/inicial/inicial';
import { RegistroDeHorasPage } from '../pages/registro-de-horas/registro-de-horas';
import { ControlarPontoDePartidaPage } from '../pages/controlar-ponto-de-partida/controlar-ponto-de-partida';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { LoginPage } from '../pages/login/login';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    InicialPage,
    RegistroDeHorasPage,
    ControlarPontoDePartidaPage,
    TabsControllerPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicialPage,
    RegistroDeHorasPage,
    ControlarPontoDePartidaPage,
    TabsControllerPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}