import { Component } from '@angular/core';
import { NavParams, NavController, ModalController } from 'ionic-angular';
import { Data } from '../../providers/data';
import { DomSanitizer} from '@angular/platform-browser';
import { RateGamePage } from '../rateGame/rateGame';

@Component({
  selector: 'page-gameDetail',
  templateUrl: 'gameDetail.html'
})
export class GameDetailPage {
	id;
	platforms = [];
	admins = [];
	developer;
	avgRating: Number;
	title;
	tags = [];
	description;
	steamEmbed;
	youtubeEmbed;
	gamePageUrl;
  constructor(public navCtrl: NavController,public modalCtrl: ModalController, public navParams: NavParams, public dataService: Data, private sanitizer: DomSanitizer) {
	
  }
	ionViewDidLoad(){
		this.id = this.navParams.get('item').id;
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
		this.gamePageUrl = this.navParams.get('item').gamePageUrl;
	}
	rate()
	{
		let addModal = this.modalCtrl.create(RateGamePage, {title: this.title, avgRating: this.avgRating, id: this.id});
		addModal.onDidDismiss( (rating)=> {
		this.avgRating = rating;
		let newGame = {
			id: this.id,
			platforms: this.platforms,
			developer: this.developer,
			title: this.title,
			tags: this.tags,
			avgRating: this.avgRating,
			description: this.description,
			gamePageUrl: this.gamePageUrl,
			steamEmbed: this.steamEmbed,
			youtubeEmbed: this.youtubeEmbed,
    };
		this.dataService.saveGame(newGame);
    });
    addModal.present();
	}
}
