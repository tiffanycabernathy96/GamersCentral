import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { Camera } from '@ionic-native/camera';
import { HomePage } from '../pages/home/home';
import { GameDetailPage } from '../pages/gameDetail/gameDetail';
import { ConventionDetailPage } from '../pages/conventionDetail/conventionDetail';
import { AddGamePage } from '../pages/addGame/addGame';
import { AddConventionPage } from '../pages/addConvention/addConvention';
import { EditGamePage } from '../pages/editGame/editGame';
import { EditConventionPage } from '../pages/editConvention/editConvention';
import { GamesPage } from '../pages/games/games';
import { ConventionsPage } from '../pages/conventions/conventions';
import { EditProfilePage } from '../pages/editProfile/editProfile';
import { ProfilePage } from '../pages/profile/profile';
import { RateGamePage } from '../pages/rateGame/rateGame';
import { TabsPage } from '../pages/tabs/tabs';
import { Data } from '../providers/data';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { LocationSelectPage } from '../pages/location-select/location-select'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConnectivityServiceProvider } from '../providers/connectivity-service/connectivity-service';
import { GoogleMapsProvider } from '../providers/google-maps/google-maps';
import { Network } from '@ionic-native/network';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpClient, HttpClientModule } from '@angular/common/http'

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
	EditProfilePage,
	ProfilePage,
	TabsPage,
	SigninPage,
	SignupPage,
	LocationSelectPage,
	RateGamePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule
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
	EditProfilePage,
	ProfilePage,
	TabsPage,
	SigninPage,
	SignupPage,
	LocationSelectPage,
	RateGamePage
  ],
  providers: [
	StatusBar,
	SplashScreen,
	Data,
	Camera,
	ConnectivityServiceProvider,
	GoogleMapsProvider,
	Network,
	Geolocation,
	HttpClientModule,
	{provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
