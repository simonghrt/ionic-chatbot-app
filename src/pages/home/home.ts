import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  colorBackRight: string = '#007bff';
  colorFontRight: string = '#ffffff';
  colorBackLeft: string = '#eeeeee';
  colorFontLeft: string = '#343a40';
  messages = [
      {"text": "Hello", "date":"", "userOwner":true},
      {"text": "Hello again", "date":"", "userOwner": false},
      {"text": "How are you ?How are you ?How are you ?How are you ?How are you ?How are you ?How are you ?How are you ?", "date":"", "userOwner": true}
  ];

  constructor(public navCtrl: NavController) {

  }

}
