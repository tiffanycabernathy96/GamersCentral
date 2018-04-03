import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AddGamePage } from '../addGame/addGame';
import { AddConventionPage } from '../addConvention/addConvention';
import { Data } from '../../providers/data';
import { GameDetailPage } from '../gameDetail/gameDetail';
import { ConventionDetailPage } from '../conventionDetail/conventionDetail';
import { EditGamePage } from '../editGame/editGame';
import { EditConventionPage } from '../editConvention/editConvention';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  
})
export class HomePage {

  public conventions = [];
  public games = [];
  constructor(public navCtrl: NavController, public modelCtrl: ModalController, public dataService: Data) {
    this.conventions = this.dataService.getConventionData();
    this.games = this.dataService.getGameData();

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