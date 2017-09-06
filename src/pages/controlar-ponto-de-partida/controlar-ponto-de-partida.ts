import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google;

@Component({
  selector: 'page-controlar-ponto-de-partida',
  templateUrl: 'controlar-ponto-de-partida.html'
})
export class ControlarPontoDePartidaPage {


  @ViewChild('map') mapElement: ElementRef;
  map: any;

  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  constructor(public navCtrl: NavController) {
    //google

    /// buscar localização setada caso não exista usar a atual
  }


  ionViewDidLoad() {
    this.initMap();
  }

  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    var map = this.map;

    navigator.geolocation.getCurrentPosition(function (position) {
      var geolocate = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      map.setCenter(geolocate);
    });
    var list = []
    google.maps.event.addListener(this.map, 'click', function (e) {
      for (var i = 0; i < list.length; i++) {
        list[i].setMap(null);
      }
      var marker = new google.maps.Marker({
        position: e.latLng,
        map: map
      });
      list.push(marker);
      map.panTo(e.latLng);
    });
    this.directionsDisplay.setMap(this.map);

  }

}
