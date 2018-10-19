import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FotomPage } from '../fotom/fotom';
import { FotofwnPage } from '../fotofwn/fotofwn';
import { FotohfPage } from '../fotohf/fotohf';
import { FotowlPage } from '../fotowl/fotowl';
import { ArtmPage } from '../artm/artm';
import { ArtfwnPage } from '../artfwn/artfwn';
import { ArthfPage } from '../arthf/arthf';
import { ArtwlPage } from '../artwl/artwl';
import { AlbmPage } from '../albm/albm';
import { AlbfwnPage } from '../albfwn/albfwn';
import { AlbhfPage } from '../albhf/albhf';
import { AlbwlPage } from '../albwl/albwl';
import { RevmPage } from '../revm/revm';
import { RevfwnPage } from '../revfwn/revfwn';
import { RefhfPage } from '../refhf/refhf';
import { RevwlPage } from '../revwl/revwl';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  foto_1 = FotomPage;
  foto_2 = FotofwnPage;
  foto_3 = FotohfPage;
  foto_4 = FotowlPage
  art_1 = ArtmPage;
  art_2 = ArtfwnPage;
  art_3 = ArthfPage;
  art_4 = ArtwlPage;
  alb_1 = AlbmPage;
  alb_2 = AlbfwnPage;
  alb_3 = AlbhfPage;
  alb_4 = AlbwlPage;
  rev_1 = RevmPage;
  rev_2 = RevfwnPage;
  rev_3 = RefhfPage;
  rev_4 = RevwlPage;

  constructor(public navCtrl: NavController) {

  }
  foto1(){
    this.navCtrl.push(this.foto_1);
  }
  alb1(){
    this.navCtrl.push(this.alb_1);
  }
  art1(){
    this.navCtrl.push(this.art_1);
  }
  rev1(){
    this.navCtrl.push(this.rev_1);
  }
  foto2(){
    this.navCtrl.push(this.foto_2);
  }
  alb2(){
    this.navCtrl.push(this.alb_2);
  }
  art2(){
    this.navCtrl.push(this.art_2);
  }
  rev2(){
    this.navCtrl.push(this.rev_2);
  }
  foto3(){
    this.navCtrl.push(this.foto_3);
  }
  alb3(){
    this.navCtrl.push(this.alb_3);
  }
  art3(){
    this.navCtrl.push(this.art_3);
  }
  rev3(){
    this.navCtrl.push(this.rev_3);
  }
  foto4(){
    this.navCtrl.push(this.foto_4);
  }
  alb4(){
    this.navCtrl.push(this.alb_4);
  }
  art4(){
    this.navCtrl.push(this.art_4);
  }
  rev4(){
    this.navCtrl.push(this.rev_4);
  }
}
