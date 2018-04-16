import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AddGamePage } from '../addGame/addGame';
import { AddConventionPage } from '../addConvention/addConvention';
import { Data } from '../../providers/data';
import { GameDetailPage } from '../gameDetail/gameDetail';
import { ConventionDetailPage } from '../conventionDetail/conventionDetail';
import { EditGamePage } from '../editGame/editGame';
import { EditConventionPage } from '../editConvention/editConvention';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  
})
export class HomePage {

  public conventions = [];
  public games = [];
  public searchInput;
  public convSearchResults = [];
  public gameSearchResults = [];
  
  constructor(public navCtrl: NavController, public modelCtrl: ModalController, public dataService: Data) {
    this.conventions = this.dataService.getConventionData();
    this.games = this.dataService.getGameData();

  }
  delete(item)
  {

  }
onInput(event)
{
	if(this.searchInput && this.searchInput != '')
	{
		this.convSearchResults = this.conventions.filter((convention)=>{
			return convention.name.toLowerCase().indexOf(this.searchInput.toLowerCase())>-1;
		});
		this.gameSearchResults = this.games.filter((game)=>{
			return game.title.toLowerCase().indexOf(this.searchInput.toLowerCase())>-1;
		});
	}
	else
	{
		this.convSearchResults = [];
			this.gameSearchResults = [];
	}
}
  ionViewWillEnter()
  {
	  
  }
  viewConventionItem(item)
  {
	  this.navCtrl.push(ConventionDetailPage, 
	  {item: item});
  }
  viewGameItem(item)
  {
	  this.navCtrl.push(GameDetailPage, 
	  {item: item});
  }
  
}