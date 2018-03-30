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

  constructor(public navCtrl: NavController, public modelCtrl: ModalController, public dataService: Data) {

  }
  delete(item)
  {

  }

  
  addItem() {
    /*let addModal = this.modelCtrl.create(AddItemPage);
    addModal.onDidDismiss((item) => {
      if (item) {
        this.dataService.addMenu(item);
      }
    });
    addModal.present();*/
  }
  
  loadEditMenu()
  {
	/*let addModal = this.modelCtrl.create(EditMenuPage);

    addModal.onDidDismiss( ()=> {
		this.entreeItems = this.dataService.getEntreesData();
		this.sideItems = this.dataService.getSidesData();
		this.dessertItems = this.dataService.getDessertsData();
		this.drinkItems = this.dataService.getDrinksData();
    });
    addModal.present();*/
  }
  ionViewWillEnter()
  {
	  
  }
  viewItem(item)
  {
	  /*this.navCtrl.push(ItemDetailPage, 
	  {item: item});*/
  }
  
}