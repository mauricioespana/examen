import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArtmPage } from './artm';

@NgModule({
  declarations: [
    ArtmPage,
  ],
  imports: [
    IonicPageModule.forChild(ArtmPage),
  ],
})
export class ArtmPageModule {}
