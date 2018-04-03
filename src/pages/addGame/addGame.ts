import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-addGame',
  templateUrl: 'addGame.html'
})
export class AddGamePage {

	platforms = [];
	admins = [];
	developer;
	avgRating: Number;
	title;
	tags = [];
	description;
	
  constructor(public navCtrl: NavController, public view: ViewController, public dataService: Data) {

  }
	save() {
		
    let newGame = {
		platforms: this.platforms,
		admins: this.admins,
		developer: this.developer,
		avgRating: this.avgRating,
		title: this.title,
		tags: this.tags,
		description: this.description
    };

		this.dataService.addGame(newGame);
    this.view.dismiss(newGame);
  }

  close() {
    this.view.dismiss();
  }
}
