import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AddConventionPage } from '../addConvention/addConvention';
import { Data } from '../../providers/data';
import { ConventionDetailPage } from '../conventionDetail/conventionDetail';
import { EditConventionPage } from '../editConvention/editConvention';
@Component({
  selector: 'page-conventions',
  templateUrl: 'conventions.html',
  
})
export class ConventionsPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {

  }
  delete(item)
  {

  }

  
  addItem() {
    let addModal = this.modalCtrl.create(AddConventionPage);
    addModal.onDidDismiss((item) => {
      if (item) {
        //this.dataService.addMenu(item);
      }
    });
    addModal.present();
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