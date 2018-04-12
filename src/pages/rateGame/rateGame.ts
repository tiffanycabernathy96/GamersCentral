import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-rateGame',
  templateUrl: 'rateGame.html'
})
export class RateGamePage {

	avgRating: Number;
	title;
	rating: Number;
	numberOfRatings: Number;
	id;
  constructor(public navCtrl: NavController,public navParams: NavParams, public dataService: Data) {
	
  }
	ionViewDidLoad(){
		this.id = this.navParams.get('id');
		this.avgRating = this.navParams.get('avgRating');
		this.title = this.navParams.get('title');
		this.numberOfRatings = this.navParams.get('numberOfRatings');
	}
	submit()
	{
		
		return this.avgRating;
	}
}
