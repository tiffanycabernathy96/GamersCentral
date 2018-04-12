import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { Data } from '../../providers/data';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-addConvention',
  templateUrl: 'addConvention.html'
})
export class AddConventionPage {
	admins = [];
	name;
	mapUrl;
	vendorsUrl;
	bracketsUrl;
	ticketsUrl;
	mainPage;
	locationV;
	scheduleUrl;
	storePageUrl;
	description;
	faq;
	locationCityState;
	zipcode;
	picture;
	
  constructor(public navCtrl: NavController, public view: ViewController, public dataService: Data, private alertCtrl: AlertController) {

	}
	
	save() {
		
    let newConvention = {
		admins: this.admins,
		name: this.name,
		mapUrl: this. mapUrl,
		vendorsUrl: this.vendorsUrl,
		bracketsUrl: this.bracketsUrl,
		ticketsUrl: this.ticketsUrl,
		mainPage: this.mainPage, 
		locationV: this.locationV, 
		scheduleUrl: this.scheduleUrl, 
		storePageUrl: this.storePageUrl,
		description: this.description,
		faq: this.faq,
		locationCityState: this.locationCityState,
		zipcode: this.zipcode,
		picture: this.picture
    };

	
    this.view.dismiss(newConvention);
  }
presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'How Do I Get This?',
	message: 'This Field should be an embed link to your Event. See https://support.google.com/maps/answer/144361?co=GENIE.Platform%3DDesktop&hl=en&oco=1 for instructions. Only get the value within the src= do not include quotes.',
    buttons: ['Dismiss']
  });
  alert.present();
}

  close() {
    this.view.dismiss();
  }
}
