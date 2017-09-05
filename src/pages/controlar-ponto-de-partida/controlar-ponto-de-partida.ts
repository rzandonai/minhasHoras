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

      var infowindow = new google.maps.InfoWindow({
        map: map,
        position: geolocate,
        content:
        '<h1>Location pinned from HTML5 Geolocation!</h1>' +
        '<h2>Latitude: ' + position.coords.latitude + '</h2>' +
        '<h2>Longitude: ' + position.coords.longitude + '</h2>'
      });
      map.setCenter(geolocate);

    });

    google.maps.event.addListener(this.map, 'click', function (e) {
      var marker = new google.maps.Marker({
        position: e.latLng,
        map: map
      });
      map.panTo(e.latLng);
    });




    this.directionsDisplay.setMap(this.map);
  }

  placeMarker(position, map) {
    var marker = new google.maps.Marker({
      position: position,
      map: map
    });
    map.panTo(position);
  }

}
