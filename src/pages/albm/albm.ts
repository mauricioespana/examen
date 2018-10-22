import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AlbmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-albm',
  templateUrl: 'albm.html',
})
export class AlbmPage {
  cancionesoos = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cancionesoos=['1. New Born', '2. Bliss', '3. Space Dementia', '4. Hyper Music', '5. Plug in Baby', '6. Citizen Erased', '7. Micro Cuts', '8. Screenager', '9. Darkshines', '10. Feeling Good', '11. Megalomania'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlbmPage');
  }

}
