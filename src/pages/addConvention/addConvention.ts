import { Component } from '@angular/core';
import { NavController, ViewController, ModalController } from 'ionic-angular';
import { Data } from '../../providers/data';
import { LocationSelectPage } from '../location-select/location-select';
import { AlertController } from 'ionic-angular';
import { AgmCoreModule } from '@agm/core';

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
	latitude;
	longitude;
	location: any;
	
  constructor(public navCtrl: NavController, public view: ViewController, public dataService: Data, public modalCtrl: ModalController, private alertCtrl: AlertController) {


	} 
	
	save() {

		this.setLatLon();
		
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
		picture: this.picture,
		latitude: this.latitude,
		longitude: this.longitude
    };

    this.view.dismiss(newConvention);
  }

	launchLocationPage(){
 
    let modal = this.modalCtrl.create(LocationSelectPage);

    modal.onDidDismiss((location) => {
		console.log(location);
		this.location = location;
		if(this.location != undefined)
		{
			this.latitude = this.location.lat;
			this.longitude = this.location.lng;
		} 
	});
	modal.present();   
		
	}

setLatLon() {
	if(this.location != undefined)
	{
		this.latitude = this.location.lat;
		this.longitude = this.location.lng;
	}
}
  close() {
    this.view.dismiss();
  }
}
