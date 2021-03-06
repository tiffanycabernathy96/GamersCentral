import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-addGame',
  templateUrl: 'addGame.html'
})
export class AddGamePage {

	platforms = [];
	developer;
	title;
	tags = [];
	description;
	steamEmbed;
	gamePageUrl;
	youtubeEmbed;
	iconLogo;
	
  constructor(public navCtrl: NavController, public view: ViewController, public dataService: Data) {

  }
	save() {
		
    let newGame = {
		platforms: this.platforms,
		developer: this.developer,
		title: this.title,
		tags: this.tags,
		description: this.description,
		steamEmbed: this.steamEmbed,
		gamePageUrl: this.gamePageUrl,
		youtubeEmbed: this.youtubeEmbed,
		iconLogo: this.iconLogo
    };

		//this.dataService.addGame(newGame);
    this.view.dismiss(newGame);
  }

  close() {
    this.view.dismiss();
  }
}
