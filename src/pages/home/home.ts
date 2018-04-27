import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AddGamePage } from '../addGame/addGame';
import { AddConventionPage } from '../addConvention/addConvention';
import { Data } from '../../providers/data';
import { GameDetailPage } from '../gameDetail/gameDetail';
import { ConventionDetailPage } from '../conventionDetail/conventionDetail';
import { EditGamePage } from '../editGame/editGame';
import { EditConventionPage } from '../editConvention/editConvention';
import { LocationSelectPage } from '../location-select/location-select';

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
  public user;
  public createdGames = [];
  public createdConventions = [];
  public ratedGames =[]
  public suggGames =[];
  public suggConv = [];
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {
	this.conventions = this.dataService.getConventionData();
	this.games = this.dataService.getGameData();
	this.suggConv = Object.assign([], this.conventions);
	this.suggGames = Object.assign([], this.games);
	this.user = this.dataService.getCurrentUser();
	this.createdGames = this.dataService.getCreatedGames();
	this.createdConventions = this.dataService.getCreatedConventions();
	this.ratedGames = this.dataService.getRatedGames();
	this.calculateSuggestedConventions();
	this.calculateSuggestedGames();
  }

launchLocationPage()
{
	let modal = this.modalCtrl.create(LocationSelectPage);
	modal.onDidDismiss((location) => {
		
	});
	modal.present();   
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
	this.conventions = this.dataService.getConventionData();
	this.games = this.dataService.getGameData();
	this.suggConv = Object.assign([], this.conventions);
	this.suggGames = Object.assign([], this.games);
	this.user = this.dataService.getCurrentUser();
	this.createdGames = this.dataService.getCreatedGames();
	this.createdConventions = this.dataService.getCreatedConventions();
	this.ratedGames = this.dataService.getRatedGames();
	this.calculateSuggestedConventions();
	this.calculateSuggestedGames();
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
  calculateSuggestedConventions()
  {
	  if(this.createdConventions)
	  {
		  for(let i = 0; i < this.createdConventions.length; i++)
		  {
			  //They will be going to their own convention no need to suggest it
			  if(this.suggConv.indexOf(this.createdConventions[i])!=-1)
			  {
				  this.suggConv.splice(this.suggConv.indexOf(this.createdConventions[i]), 1);
			  }
		  }
	  }
	  let indexs =[];
	  if(this.suggConv)
	  {
		  for(let i = 0; i < this.suggConv.length; i++)
		  {
			  if(this.suggConv[i].locationCityState != this.user.attributes.locationCityState && this.suggConv[i].zipcode != this.user.attributes.zipcode)
			  {
				  indexs.push(i);
			  }
		  }
		  while(indexs.length>0)
		  {
			  this.suggConv.splice(indexs[0], 1);
			  indexs.splice(0,1);
		  }
	  }
  }
  calculateSuggestedGames()
  {
	  if(this.createdGames)
	  {
		  for(let i = 0; i< this.createdGames.length; i++)
		  {
			  //They have probably played their own game no reason to suggest it. 
			  if(this.suggGames.indexOf(this.createdGames[i])!=-1)
			  {
				  this.suggGames.splice(this.suggGames.indexOf(this.createdGames[i]), 1);
			  }
		  }
	  }
	  //Get rid of Games they do not have platforms for and games they have already played
	  let indexs =[];
	  let userPlatforms = this.user.attributes.platforms;
	  if(this.suggGames)
	  {
		  for(let i = 0; i < this.suggGames.length; i++)
		  {
			  let keep = false;
			  let gamePlatforms = this.suggGames[i].platforms;
			  if(gamePlatforms)
			  {
				  for(let j = 0; j < gamePlatforms.length; j++)
				  {
					if(userPlatforms.indexOf(gamePlatforms[j])!=-1 && (!this.dataService.ratingExists(this.suggGames[i].id)))
					{
						keep=true;
					}
				  }
				  if(keep == false)
				  {
					  indexs.push(i);
				  }
			  }
		  }
		  while(indexs.length>0)
		  {
			  this.suggGames.splice(indexs[0], 1);
			  indexs.splice(0,1);
		  }
	  
		  let userGenres = this.user.attributes.likedGenres;
		  //Add genres of games they have enjoyed
		  for(let i = 0; i < this.suggGames.length; i++)
		  {
			  let rating = this.dataService.getRating(this.suggGames[i].id);
			  if(rating >=80)
			  {
				let gameGenres = this.suggGames[i].tags;
				if(gameGenres)
				{
					for(let j = 0; j < gameGenres.length; j++)
					{
						if(userGenres.indexOf(gameGenres[j]==-1))
						{
							userGenres.push(gameGenres[j]);
						}
					}
				}
			  }	
		  }
			//If they are not known to like the game genre dont suggest it.
	  
		  for(let i = 0; i < this.suggGames.length; i++)
		  {
			  let keep = false;
			  let gameGenres = this.suggGames[i].tags;
			  if(gameGenres)
			  {
				  for(let j = 0; j < gameGenres.length; j++)
				  {
					  if(userGenres.indexOf(gameGenres[j])!=-1)
					  {
						  keep = true;
					  }
				  }
				  if(keep == false)
				  {
					  indexs.push(i);
				  }
			  }
		  }
	  }
	  while(indexs.length>0)
	  {
		  this.suggGames.splice(indexs[0], 1);
		  indexs.splice(0,1);
	  }
  }
  
}