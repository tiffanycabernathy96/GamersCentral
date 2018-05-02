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
  public myGames = [];
  public myRatedGames = [];
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {

	this.allGames = this.dataService.getGameData();
	this.myGames = this.dataService.getCreatedGames();
	this.myRatedGames = this.dataService.getRatedGames();
  }
  deleteGame(item)
  {
		this.dataService.deleteGame(item);
		this.allGames = this.dataService.getGameData();
		this.myGames = this.dataService.getCreatedGames();
		this.myRatedGames = this.dataService.getRatedGames();
  }
  ionViewWillEnter()
  {
	this.allGames = this.dataService.getGameData();
	this.myGames = this.dataService.getCreatedGames();
	this.myRatedGames = this.dataService.getRatedGames();
  }
  addGame() {
      let addModal = this.modalCtrl.create(AddGamePage);
      addModal.onDidDismiss((item) => {
        if (item) {
			this.dataService.addGame(item);
			this.allGames.push(item);
			this.myGames.push(item);
			this.allGames = this.dataService.getGameData();
        }
      });
      addModal.present();
  }
  
  loadEditGame(item)
  {  
    let addModal = this.modalCtrl.create(EditGamePage, {item: item});
	addModal.onDidDismiss( ()=> {
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