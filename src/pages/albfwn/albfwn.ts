import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AlbfwnPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-albfwn',
  templateUrl: 'albfwn.html',
})
export class AlbfwnPage {
  cancionesfwn = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cancionesfwn=['1. Brianstorm', '2. Teddy Picker', '3. D is for Dangerous', '4. Balaclava', '5. Fluorescent Adolescent', '6. Only Ones Who Know', '7. Do Me a Favour', '8. This House is a Circus', '9. If You Were There, Beware', '10. The Bad Thing', '11. Old Yellow Bricks', '12. 505'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlbfwnPage');
  }

}
