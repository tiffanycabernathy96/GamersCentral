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
  }
  delete(item)
  {

  }

  
  ionViewWillEnter()
  {

  }
  addGame() {
      let addModal = this.modalCtrl.create(AddGamePage);
      addModal.onDidDismiss((item) => {
        if (item) {
          this.allGames = this.dataService.getGameData();
		  //this.saveItem(item);
        }
        //this.saveMenu();
      });
      addModal.present();
  }
  
  loadEditGame()
  {
    let addModal = this.modalCtrl.create(EditGamePage);
    addModal.present();

	/*let addModal = this.modelCtrl.create(EditMenuPage);

    addModal.onDidDismiss( ()=> {
		this.entreeItems = this.dataService.getEntreesData();
		this.sideItems = this.dataService.getSidesData();
		this.dessertItems = this.dataService.getDessertsData();
		this.drinkItems = this.dataService.getDrinksData();
    });
    addModal.present();*/

    /*
    newGame.set("platforms", item.platforms);
			newGame.set("admins", item.admins);
			newGame.set("developer", item.developer);
			newGame.set("avgRating", item.avgRating);
			newGame.set("title", item.title);
			newGame.set("tags", item.tags);
			newGame.set("description", item.description);
    */
  }

  viewItem(item)
  {
	  this.navCtrl.push(GameDetailPage, 
	  {item: item});
  }
  
}