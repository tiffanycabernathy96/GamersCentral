import { Component } from '@angular/core';
import { NavParams, NavController, ModalController } from 'ionic-angular';
import { Data } from '../../providers/data';
import { DomSanitizer} from '@angular/platform-browser';
import { RateGamePage } from '../rateGame/rateGame';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-gameDetail',
  templateUrl: 'gameDetail.html'
})
export class GameDetailPage {

	id;
	platforms = [];
	admins = [];
	developer;
	avgRating: number;
	title;
	tags = [];
	description;
	steamEmbed;
	youtubeEmbed;
	gamePageUrl;

	rateDisable: boolean;
  constructor(private alertCtrl: AlertController, public navCtrl: NavController,public modalCtrl: ModalController, public navParams: NavParams, public dataService: Data, private sanitizer: DomSanitizer) {
	
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
		//this.dataService.getGameData().then(games =>{this.allGames = games;});
		this.dataService.ratingExists(this.id).then(value=>{this.rateDisable=value;});
	}
	rate()
	{
		let alert = this.alertCtrl.create({
			title: 'Rate ' + this.title,
			inputs:
			[
			{
				type: 'radio',
				label: 'The Game is GREAT',
				value: '100'
			}, 
			{
				type: 'radio',
				label: 'Nearly Perfect, Nearly',
				value: '90'
			},
			{
				type: 'radio',
				label: 'It is a Love Hate Relationship',
				value: '80'
			},
			{
				type: 'radio',
				label: 'It Could Use With Improvement',
				value: '70'
			},
			{
				type: 'radio',
				label: 'Waste of Time',
				value: '60'
			}
			],
			buttons:
			[
			{
				text: 'Cancel'
			},
			{
				text: 'Save', 
				handler: (data: any) =>{
					
					if(data != undefined)
					{
						console.log('Radio data:', data);
						this.dataService.addRating(this.id, parseInt(data)).then(value=>{this.avgRating = value;});
					}
				}
			}
			]
		});
		alert.present();
		
		/*let addModal = this.modalCtrl.create(RateGamePage, {title: this.title, avgRating: this.avgRating, id: this.id});
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
    addModal.present();*/
	}
}
