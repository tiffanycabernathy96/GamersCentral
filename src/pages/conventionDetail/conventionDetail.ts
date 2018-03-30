import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { Data } from '../../providers/data';

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
	eventMngr;
	locationV;
	scheduleUrl;
	storePageUrl;
  constructor(public navCtrl: NavController,public navParams: NavParams, public dataService: Data) {
	
  }
	ionViewDidLoad(){
		this.admins = this.navParams.get('item').admins;
		this.name = this.navParams.get('item').name;
		this.mapUrl = this.navParams.get('item').mapUrl;
		this.vendorsUrl = this.navParams.get('item').vendorsUrl;
		this.bracketsUrl = this.navParams.get('item').bracketsUrl;
		this.ticketsUrl = this.navParams.get('item').ticketsUrl;
		this.eventMngr = this.navParams.get('item').eventMngr;
		this.locationV = this.navParams.get('item').locationV;
		this.scheduleUrl = this.navParams.get('item').scheduleUrl;
		this.storePageUrl = this.navParams.get('item').storePageUrl;

	}
}
