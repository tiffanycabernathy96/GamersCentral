import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { Data } from '../../providers/data';
import { DomSanitizer} from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'page-conventionDetail',
  templateUrl: 'conventionDetail.html'
})
export class ConventionDetailPage {
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
  constructor(public navCtrl: NavController,public navParams: NavParams, public dataService: Data, private sanitizer: DomSanitizer) {
	
  }
	ionViewDidLoad(){
		this.admins = this.navParams.get('item').admins;
		this.name = this.navParams.get('item').name;
		this.mapUrl = this.navParams.get('item').mapUrl;
		this.vendorsUrl = this.navParams.get('item').vendorsUrl;
		this.bracketsUrl = this.navParams.get('item').bracketsUrl;
		this.ticketsUrl = this.navParams.get('item').ticketsUrl;
		this.mainPage = this.navParams.get('item').mainPage;
		this.locationV = this.navParams.get('item').locationV;
		this.locationV = this.sanitizer.bypassSecurityTrustResourceUrl(this.locationV);
		this.scheduleUrl = this.navParams.get('item').scheduleUrl;
		this.storePageUrl = this.navParams.get('item').storePageUrl;
		this.description = this.navParams.get('item').description;
		this.faq = this.navParams.get('item').faq;
		this.locationCityState = this.navParams.get('item').locationCityState;
		this.zipcode = this.navParams.get('item').zipcode;
		this.picture= this.navParams.get('item').picture;
		this.latitude = this.navParams.get('item').latitude,
		this.longitude = this.navParams.get('item').longitude
	}
}
