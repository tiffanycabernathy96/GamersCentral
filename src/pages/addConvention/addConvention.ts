import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
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
	eventMngr;
	locationV;
	scheduleUrl;
	storePageUrl;
	
  constructor(public navCtrl: NavController, public view: ViewController) {

  }
	save() {
		
    let newConvention = {
		admins: this.admins,
		name: this.name,
		mapUrl: this. mapUrl,
		vendorsUrl: this.vendorsUrl,
		bracketsUrl: this.bracketsUrl,
		ticketsUrl: this.ticketsUrl,
		eventMngr: this.eventMngr, 
		locationV: this.locationV, 
		scheduleUrl: this.scheduleUrl, 
		storePageUrl: this.storePageUrl
    };

    this.view.dismiss(newConvention);
  }

  close() {
    this.view.dismiss();
  }
}
