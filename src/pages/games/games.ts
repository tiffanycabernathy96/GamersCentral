import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AddGamePage } from '../addGame/addGame';
import { Data } from '../../providers/data';
import { GameDetailPage } from '../gameDetail/gameDetail';
import { EditGamePage } from '../editGame/editGame';

@Component({
  selector: 'page-games',
  templateUrl: 'games.html',
  
})
export class GamesPage {

  public allGames = [];
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {

	this.allGames = this.dataService.getGameData();
	//this.dataService.getGameData().then(games =>{this.allGames = games;});

  }
  delete(item)
  {

  }
  ionViewWillEnter()
  {
	this.allGames = this.dataService.getGameData();
	 //this.dataService.getGameData().then(games =>{this.allGames = games;});
  }
  addGame() {
      let addModal = this.modalCtrl.create(AddGamePage);
      addModal.onDidDismiss((item) => {
        if (item) {
			this.dataService.addGame(item);
			this.allGames.push(item);
			//this.dataService.getGameData().then(games =>{this.allGames = games;});
			this.allGames = this.dataService.getGameData();
        }
      });
      addModal.present();
  }
  
  loadEditGame(item)
  {  
    let addModal = this.modalCtrl.create(EditGamePage, {item: item});
	addModal.onDidDismiss( ()=> {
		//this.dataService.getGameData().then(games =>{this.allGames = games;});
		this.allGames = this.dataService.getGameData();
    });
    addModal.present();
  }

  viewItem(item)
  {
	  this.navCtrl.push(GameDetailPage, 
	  {item: item});
  }
  
}