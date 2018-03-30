import { Component } from '@angular/core';
import { ModalController, NavController, ViewController } from 'ionic-angular';
import { Data } from '../../providers/data';


@Component({
  selector: 'page-editConvention',
  templateUrl: 'editConvention.html'
})
export class EditConventionPage {

	
  constructor(public navCtrl: NavController, public modelCtrl: ModalController, public view: ViewController, public dataService: Data) {

  }
	ionViewWillEnter()
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
  
	save() {
		
		this.view.dismiss();
  }

  close() {
    this.view.dismiss();
  }
}
