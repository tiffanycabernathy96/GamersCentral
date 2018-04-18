import { Component } from '@angular/core';
import { NavParams, ViewController, ModalController } from 'ionic-angular';
import { Data } from '../../providers/data';
import { AgmCoreModule } from '@agm/core';
import { LocationSelectPage } from '../location-select/location-select';

@Component({
  selector: 'page-editConvention',
  templateUrl: 'editConvention.html'
})
export class EditConventionPage {
	id;
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
	iconLogo;
  constructor(public params: NavParams, public view: ViewController, public dataService: Data, public modalCtrl: ModalController) {
	this.id = params.get('item').id;
	this.name = params.get('item').name;
	this.mapUrl = params.get('item').mapUrl;
	this.vendorsUrl = params.get('item').vendorsUrl;
	this.bracketsUrl = params.get('item').bracketsUrl;
	this.ticketsUrl = params.get('item').ticketsUrl;
	this.mainPage = params.get('item').mainPage;
	this.locationV = params.get('item').locationV;
	this.scheduleUrl = params.get('item').scheduleUrl;
	this.storePageUrl = params.get('item').storePageUrl;
	this.description = params.get('item').description;
	this.faq = params.get('item').faq;
	this.locationCityState = params.get('item').locationCityState;
	this.zipcode = params.get('item').zipcode;
	this.picture = params.get('item').picture;
	this.latitude = params.get('item').latitude,
	this.longitude = params.get('item').longitude,
	this.iconLogo = params.get('item').iconLogo
  }
	ionViewWillEnter()
	{

	}

  
	save() {
		this.setLatLon();
		let newConvention = {
			id: this.id,
			admins: this.admins,
			name: this.name,
			mapUrl: this.mapUrl,
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
			longitude: this.longitude,
			iconLogo: this.iconLogo
    };
		this.dataService.saveConvention(newConvention);
		this.view.dismiss();
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
