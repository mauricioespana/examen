import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RevmPage } from './revm';

@NgModule({
  declarations: [
    RevmPage,
  ],
  imports: [
    IonicPageModule.forChild(RevmPage),
  ],
})
export class RevmPageModule {}
