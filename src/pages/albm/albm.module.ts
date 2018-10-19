import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlbmPage } from './albm';

@NgModule({
  declarations: [
    AlbmPage,
  ],
  imports: [
    IonicPageModule.forChild(AlbmPage),
  ],
})
export class AlbmPageModule {}
