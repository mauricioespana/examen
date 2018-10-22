import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AlbhfPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-albhf',
  templateUrl: 'albhf.html',
})
export class AlbhfPage {
  cancioneshf = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cancioneshf=['1. Jenny Was a Friend of Mine', '2. Mr Brightside', '3. Smile Like You Mean It', '4. Somebody Told Me', '5. All These Things That I\'ve done', '6. Andy You\'re a Star', '7. On Top', '8. Change Your Mind', '9. Believe Me Natalie', '10. Midnight Show', '11. Everything Will Be Alright'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlbhfPage');
  }

}
