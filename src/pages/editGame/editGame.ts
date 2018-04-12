import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-editGame',
  templateUrl: 'editGame.html'
})
export class EditGamePage {
	id;
	platforms = [];
	admins = [];
	developer;
	title;
	tags = [];
	description;
	gamePageUrl;
  constructor(public params: NavParams, public view: ViewController, public dataService: Data) {
	this.id = params.get('item').id;
	this.platforms = params.get('item').platforms;
	this.developer = params.get('item').developer;
	this.title = params.get('item').title;
	this.tags = params.get('item').tags;
	this.description = params.get('item').description;
	this.gamePageUrl = params.get('item').gamePageUrl;
  }
	ionViewWillEnter()
	{

	}
  
	save() {
		let newGame = {
			id: this.id,
			platforms: this.platforms,
			developer: this.developer,
			title: this.title,
			tags: this.tags,
			description: this.description,
			gamePageUrl: this.gamePageUrl
    };
		this.dataService.saveGame(newGame);
		this.view.dismiss();
  }

  close() {
    this.view.dismiss();
  }
}
