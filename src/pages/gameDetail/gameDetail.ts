import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-gameDetail',
  templateUrl: 'gameDetail.html'
})
export class GameDetailPage {
	platforms = [];
	admins = [];
	developer;
	avgRating: Number;
	title;
	tags = [];
	description;
  constructor(public navCtrl: NavController,public navParams: NavParams, public dataService: Data) {
	
  }
	ionViewDidLoad(){
		this.platforms = this.navParams.get('item').platforms;
		this.admins = this.navParams.get('item').admins;
		this.developer = this.navParams.get('item').developer;
		this.avgRating = this.navParams.get('item').avgRating;
		this.title = this.navParams.get('item').title;
		this.tags = this.navParams.get('item').tags;
		this.description = this.navParams.get('item').description;
	}
	rate()
	{
		
	}
}
