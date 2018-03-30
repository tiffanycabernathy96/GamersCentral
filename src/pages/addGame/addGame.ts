import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
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
	
  constructor(public navCtrl: NavController, public view: ViewController) {

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

    this.view.dismiss(newGame);
  }

  close() {
    this.view.dismiss();
  }
}
