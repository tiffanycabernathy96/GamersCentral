import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { Data } from '../../providers/data';
import { DomSanitizer} from '@angular/platform-browser';

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
	steamEmbed;
	youtubeEmbed;
  constructor(public navCtrl: NavController,public navParams: NavParams, public dataService: Data, private sanitizer: DomSanitizer) {
	
  }
	ionViewDidLoad(){
		this.steamEmbed = this.navParams.get('item').steamEmbed;
		this.steamEmbed = this.sanitizer.bypassSecurityTrustResourceUrl(this.steamEmbed);
		this.platforms = this.navParams.get('item').platforms;
		this.admins = this.navParams.get('item').admins;
		this.developer = this.navParams.get('item').developer;
		this.avgRating = this.navParams.get('item').avgRating;
		this.title = this.navParams.get('item').title;
		this.tags = this.navParams.get('item').tags;
		this.description = this.navParams.get('item').description;
		this.youtubeEmbed = this.navParams.get('item').youtubeEmbed;
		this.youtubeEmbed = this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeEmbed);
	}
	rate()
	{
		
	}
}
