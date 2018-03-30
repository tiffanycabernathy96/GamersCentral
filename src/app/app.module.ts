import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { GameDetailPage } from '../pages/gameDetail/gameDetail';
import { ConventionDetailPage } from '../pages/conventionDetail/conventionDetail';
import { AddGamePage } from '../pages/addGame/addGame';
import { AddConventionPage } from '../pages/addConvention/addConvention';
import { EditGamePage } from '../pages/editGame/editGame';
import { EditConventionPage } from '../pages/editConvention/editConvention';
import { GamesPage } from '../pages/games/games';
import { ConventionsPage } from '../pages/conventions/conventions';
import { TabsPage } from '../pages/tabs/tabs';
import { Data } from '../providers/data';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GameDetailPage,
    ConventionDetailPage,
	AddGamePage,
	AddConventionPage,
	EditGamePage,
	EditConventionPage,
	GamesPage,
	ConventionsPage,
    TabsPage,
	SigninPage,
	SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
	IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GameDetailPage,
    ConventionDetailPage,
	AddGamePage,
	AddConventionPage,
	EditGamePage,
	EditConventionPage,
	GamesPage,
	ConventionsPage,
    TabsPage,
	SigninPage,
	SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
	Data
  ]
})
export class AppModule {}
