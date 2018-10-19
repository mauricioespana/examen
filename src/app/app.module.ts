import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FotomPage } from '../pages/fotom/fotom';
import { AlbmPage } from '../pages/albm/albm';
import { ArtmPage } from '../pages/artm/artm';
import { RevmPage } from '../pages/revm/revm';
import { FotofwnPage } from '../pages/fotofwn/fotofwn';
import { FotohfPage } from '../pages/fotohf/fotohf';
import { FotowlPage } from '../pages/fotowl/fotowl';
import { AlbfwnPage } from '../pages/albfwn/albfwn';
import { AlbhfPage } from '../pages/albhf/albhf';
import { AlbwlPage } from '../pages/albwl/albwl';
import { ArtfwnPage } from '../pages/artfwn/artfwn';
import { ArthfPage } from '../pages/arthf/arthf';
import { ArtwlPage } from '../pages/artwl/artwl';
import { RevfwnPage } from '../pages/revfwn/revfwn';
import { RevwlPage } from '../pages/revwl/revwl';
import { RefhfPage } from '../pages/refhf/refhf';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FotomPage,
    FotofwnPage,
    FotohfPage,
    FotowlPage,
    AlbmPage,
    AlbfwnPage,
    AlbhfPage,
    AlbwlPage,
    ArtmPage,
    ArtfwnPage,
    ArthfPage,
    ArtwlPage,
    RevmPage,
    RevfwnPage,
    RevwlPage,
    RefhfPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FotomPage,
    FotofwnPage,
    FotohfPage,
    FotowlPage,
    AlbmPage,
    AlbfwnPage,
    AlbhfPage,
    AlbwlPage,
    ArtmPage,
    ArtfwnPage,
    ArthfPage,
    ArtwlPage,
    RevmPage,
    RevfwnPage,
    RevwlPage,
    RefhfPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
