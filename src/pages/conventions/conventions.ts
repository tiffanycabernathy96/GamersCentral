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
  ionViewWillEnter()
  {
	  this.allConventions = this.dataService.getConventionData();
  }
  addConvention() {
    let addModal = this.modalCtrl.create(AddConventionPage);
	let self=this;
    addModal.onDidDismiss((item) => {
      if (item) {
		  self.dataService.addConvention(item);
		  self.allConventions = self.dataService.getConventionData();
      }
    });
    addModal.present();
  }
  
  loadEditConvention(item)
  {
    let addModal = this.modalCtrl.create(EditConventionPage, {item: item});
	let self=this;
	addModal.onDidDismiss( ()=> {
		self.allConventions = self.dataService.getConventionData();
    });
    addModal.present();
  }
  viewItem(item)
  {
	  this.navCtrl.push(ConventionDetailPage, 
	  {item: item});
  }
  
}