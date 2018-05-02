import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AddGamePage } from '../addGame/addGame';
import { AddConventionPage } from '../addConvention/addConvention';
import { Data } from '../../providers/data';
import { GameDetailPage } from '../gameDetail/gameDetail';
import { ConventionDetailPage } from '../conventionDetail/conventionDetail';
import { EditGamePage } from '../editGame/editGame';
import { EditConventionPage } from '../editConvention/editConvention';
import { LocationSelectPage } from '../location-select/location-select';
import { Facebook } from '@ionic-native/facebook';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  
})
export class HomePage {

  public conventions = [];
  public games = [];
  public searchInput;
  public convSearchResults = [];
  public gameSearchResults = [];

  isLoggedIn: boolean = true;
  
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data, private fb: Facebook) {
	this.conventions = this.dataService.getConventionData();
	this.games = this.dataService.getGameData();
    //this.dataService.getConventionData().then(conventions =>{this.conventions = conventions;});
    //this.dataService.getGameData().then(games =>{this.games = games;});

  }

  launchLocationPage(){
 
    let modal = this.modalCtrl.create(LocationSelectPage);

    modal.onDidDismiss((location) => {
        console.log(location);
    });

    modal.present();   

}

logout() {
  this.fb.logout()
    .then( res => this.isLoggedIn = false)
    .catch(e => console.log('Error logout from Facebook', e));
}

  delete(item)
  {

  }
onInput(event)
{
	if(this.searchInput && this.searchInput != '')
	{
		this.convSearchResults = this.conventions.filter((convention)=>{
			return convention.name.toLowerCase().indexOf(this.searchInput.toLowerCase())>-1;
		});
		this.gameSearchResults = this.games.filter((game)=>{
			return game.title.toLowerCase().indexOf(this.searchInput.toLowerCase())>-1;
		});
	}
	else
	{
		this.convSearchResults = [];
			this.gameSearchResults = [];
	}
}
  ionViewWillEnter()
  {
	  this.conventions = this.dataService.getConventionData();
	this.games = this.dataService.getGameData();
	  //this.dataService.getConventionData().then(conventions =>{this.conventions = conventions;});
		//this.dataService.getGameData().then(games =>{this.games = games;});
  }
  viewConventionItem(item)
  {
	  this.navCtrl.push(ConventionDetailPage, 
	  {item: item});
  }
  viewGameItem(item)
  {
	  this.navCtrl.push(GameDetailPage, 
	  {item: item});
  }
  
}