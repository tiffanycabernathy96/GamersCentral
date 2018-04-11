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

  public allConventions = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {
    this.allConventions = this.dataService.getConventionData();

  }
  delete(item)
  {

  }


  
  addConvention() {
    let addModal = this.modalCtrl.create(AddConventionPage);
    addModal.onDidDismiss((item) => {
      if (item) {
		  this.allConventions = this.dataService.getConventionData();
        //this.dataService.addMenu(item);
      }
    });
    addModal.present();
  }
  
  loadEditConvention()
  {
    let addModal = this.modalCtrl.create(EditConventionPage);
    addModal.present();

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
	  this.navCtrl.push(ConventionDetailPage, 
	  {item: item});
  }
  
}