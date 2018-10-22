import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AlbwlPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-albwl',
  templateUrl: 'albwl.html',
})
export class AlbwlPage {
  cancioneswl = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cancioneswl=['1. Bridge Burning', '2. Rope', '3. Dear Rosemary', '4. White Limo', '5. Arlandria', '6. These Days', '7. Back & Forth', '8. A Matter of Time', '9. Miss the Misery', '10. I Should Have Known', '11. Walk'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlbwlPage');
  }

}
