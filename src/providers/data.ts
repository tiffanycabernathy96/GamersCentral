import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Parse } from 'parse';
@Injectable()
export class Data {

	private parseAppId: string = 'pjhBBiUR9zhM4yVyvzJ4VZqEVdwtIsJOoKZlU6BJ';
	private parseJSKey: string = 'jyIut17JVHHJFTlOVPqqTdhlQ00GUd6tBpOLYrbZ';
	private parseServerUrl: string= 'https://parseapi.back4app.com/';
	public currentUser;
	public currentGames =[];
	public currentConventions =[];
	constructor(public storage: Storage) {
		Parse.initialize(this.parseAppId, this.parseJSKey);
		Parse.serverURL = this.parseServerUrl;
		
		const ConventionQ = Parse.Object.extend('Convention');
		let cquery = new Parse.Query(ConventionQ);
		cquery.limit(1000);
		var self =this;
		cquery.find({
			success: function(conventions) {
			for (var i = conventions.length-1; i >= 0; i--){
				var myConvention = {
					id: conventions[i].id,
					admins: conventions[i].get("admins"),
					name: conventions[i].get("name"),
					mapUrl: conventions[i].get("mapUrl"),
					vendorsUrl: conventions[i].get("vendorsUrl"),
					bracketsUrl: conventions[i].get("bracketsUrl"),
					ticketsUrl: conventions[i].get("ticketsUrl"),
					mainPage: conventions[i].get("mainPage"),
					locationV: conventions[i].get("locationV"),
					scheduleUrl: conventions[i].get("scheduleUrl"),
					storePageUrl: conventions[i].get("storePageUrl"),
					description: conventions[i].get("Description"),
					locationCityState: conventions[i].get("locationCityState"),
					zipcode: conventions[i].get("zipcode"),
					faq: conventions[i].get("FaQ"),
					picture: conventions[i].get("picture"),
					latitude: conventions[i].get("lat"),
					longitude: conventions[i].get("lng"),
					iconLogo: conventions[i].get("iconLogo")
				}
				self.currentConventions.push(myConvention);
			}
			},
			error: function(error){
				alert("it did not work");
			}
		});
		const GameQ = Parse.Object.extend('Game');
		let gquery = new Parse.Query(GameQ);
		gquery.limit(1000);
		gquery.find({
			success: function(games) {
			for (var i = games.length-1; i >= 0; i--){
				var myGame = {
					id: games[i].id,
					platforms: games[i].get("platforms"),
					developer: games[i].get("developer"),
					avgRating: games[i].get("AvgRating"),
					steamEmbed: games[i].get("steamEmbed"),
					title: games[i].get("title"),
					tags: games[i].get("tags"),
					description: games[i].get("description"),
					gamePageUrl: games[i].get("gamePageUrl"),
					youtubeEmbed: games[i].get("youtubeEmbed"),
					iconLogo: games[i].get("iconLogo")
				}
				self.currentGames.push(myGame);
			}
			},
			error: function(error){
				alert("it did not work");
			}
		});
	}
	setCurrentUser(user)
	{
		if(user){
			this.currentUser = user;
		}
	}
	getCurrentUser()
	{
		return this.currentUser;
	}

	saveProfile(newInfo)
	{
		const User = Parse.Object.extend('User');
		let userInfo = new Parse.Query(User);
		userInfo.equalTo("objectId", newInfo.id);
		userInfo.first({
			success: function(user){
				if(user){
					user.set('username', newInfo.username);
					user.set('password', newInfo.password);
					user.set('email', newInfo.email);
					user.set('facebook', newInfo.facebook);
					user.set('instagram', newInfo.instagram);
					user.set('twitter', newInfo.twitter);
					user.set('picture', newInfo.picture);
					user.set('likedGenres', newInfo.likedGenres);
					user.set('platforms', newInfo.platforms);
					user.set('locationCityState', newInfo.locationCityState);
					user.set('zipcode', newInfo.zipcode);
					user.save(null, {
						success: function(newProfile)
						{
							console.log("Saved");
						},
						error: function(response, error)
						{
							alert(error.code+' Failed to Save Profile ' + error.message);
						}
					});
				}
			},
			error: function(error){
				console.log("Error: " + error.code);
			}
		}
		);
	}
	async addConvention(item)

	{
		const Convention = Parse.Object.extend('Convention');
		let newConvention = new Convention();
		newConvention.set("name", item.name);
		newConvention.set("locationV",item.locationV);
		newConvention.set("mapUrl", item.mapUrl);
		newConvention.set("vendorsUrl", item.vendorsUrl);
		newConvention.set("bracketsUrl", item.bracketsUrl);
		newConvention.set("ticketsUrl", item.ticketsUrl);
		newConvention.set("mainPage", item.mainPage);
		newConvention.set("scheduleUrl", item.scheduleUrl);
		newConvention.set("storePageUrl", item.storePageUrl);
		newConvention.set("Description", item.description);
		newConvention.set("locationCityState", item.locationCityState);
		newConvention.set("zipcode", item.zipcode);
		newConvention.set("FaQ", item.faq);
		newConvention.set("picture", item.picture);
		newConvention.set("lat", item.latitude);
		newConvention.set("lng", item.longitude);
		newConvention.set("iconLogo", item.iconLogo);
		await newConvention.save(null, {
			success: function(newConvention)
			{

			},
			error: function(newConvention, error)
			{
				alert(error.code+' Failed to Add Item ' + newConvention.get("name"));
			}
		});
		
		this.currentConventions = [];
		const ConventionQ = Parse.Object.extend('Convention');
		let cquery = new Parse.Query(ConventionQ);
		cquery.limit(1000);
		var self =this;
		cquery.find({
			success: function(conventions) {
			for (var i = conventions.length-1; i >= 0; i--){
				var myConvention = {
					id: conventions[i].id,
					admins: conventions[i].get("admins"),
					name: conventions[i].get("name"),
					mapUrl: conventions[i].get("mapUrl"),
					vendorsUrl: conventions[i].get("vendorsUrl"),
					bracketsUrl: conventions[i].get("bracketsUrl"),
					ticketsUrl: conventions[i].get("ticketsUrl"),
					mainPage: conventions[i].get("mainPage"),
					locationV: conventions[i].get("locationV"),
					scheduleUrl: conventions[i].get("scheduleUrl"),
					storePageUrl: conventions[i].get("storePageUrl"),
					description: conventions[i].get("Description"),
					locationCityState: conventions[i].get("locationCityState"),
					zipcode: conventions[i].get("zipcode"),
					faq: conventions[i].get("FaQ"),
					picture: conventions[i].get("picture"),
					latitude: conventions[i].get("lat"),
					longitude: conventions[i].get("lng"),
					iconLogo: conventions[i].get("iconLogo")
				}
				self.currentConventions.push(myConvention);
			}
			},
			error: function(error){
				alert("it did not work");
			}
		});
	}

	getConventionData() {
		return this.currentConventions;
		// const Convention = Parse.Object.extend('Convention');
		// let query = new Parse.Query(Convention);
		// var items = [];
		// query.limit(1000);
		// await query.find().then((conventions) => {
		  // console.log(conventions.length)
		  // for (var i = conventions.length-1; i >= 0; i--){
			// var myConvention = {
				// id: conventions[i].id,
				// admins: conventions[i].get("admins"),
				// name: conventions[i].get("name"),
				// mapUrl: conventions[i].get("mapUrl"),
				// vendorsUrl: conventions[i].get("vendorsUrl"),
				// bracketsUrl: conventions[i].get("bracketsUrl"),
				// ticketsUrl: conventions[i].get("ticketsUrl"),
				// mainPage: conventions[i].get("mainPage"),
				// locationV: conventions[i].get("locationV"),
				// scheduleUrl: conventions[i].get("scheduleUrl"),
				// storePageUrl: conventions[i].get("storePageUrl"),
				// description: conventions[i].get("Description"),
				// locationCityState: conventions[i].get("locationCityState"),
				// zipcode: conventions[i].get("zipcode"),
				// faq: conventions[i].get("FaQ"),
				// picture: conventions[i].get("picture"),
				// latitude: conventions[i].get("lat"),
				// longitude: conventions[i].get("lng"),
				// iconLogo: conventions[i].get("iconLogo")
			// }
			// items.push(myConvention);
		  // }
		  // return items;
	
		// }, (error) => {
		  
		// });
	
		// return items;
	  }

	async addGame(item)
	{
		const Game = Parse.Object.extend('Game');
		let newGame = new Game();
		newGame.set("platforms", item.platforms);
		newGame.set("developer", item.developer);
		newGame.set("title", item.title);
		newGame.set("steamEmbed", item.steamEmbed);
		newGame.set("tags", item.tags);
		newGame.set("description", item.description);
		newGame.set("gamePageUrl", item.gamePageUrl);
		newGame.set("youtubeEmbed", item.youtubeEmbed);
		newGame.set("iconLogo", item.iconLogo);
		await newGame.save(null, {
			success: function(newGame)
			{
				
			},
			error: function(newGame, error)
			{
				alert(error.code+' Failed to Add Item ' + newGame.get("name"));
			}
		});
		
		this.currentGames = [];
		const GameQ = Parse.Object.extend('Game');
		let gquery = new Parse.Query(GameQ);
		gquery.limit(1000);
		gquery.find({
			success: function(games) {
			for (var i = games.length-1; i >= 0; i--){
				var myGame = {
					id: games[i].id,
					platforms: games[i].get("platforms"),
					developer: games[i].get("developer"),
					avgRating: games[i].get("AvgRating"),
					steamEmbed: games[i].get("steamEmbed"),
					title: games[i].get("title"),
					tags: games[i].get("tags"),
					description: games[i].get("description"),
					gamePageUrl: games[i].get("gamePageUrl"),
					youtubeEmbed: games[i].get("youtubeEmbed"),
					iconLogo: games[i].get("iconLogo")
				}
				this.currentGames.push(myGame);
			}
			},
			error: function(error){
				alert("it did not work");
			}
		});
	}

	getGameData() {
		return this.currentGames;
		// const Game = Parse.Object.extend('Game');
		// let query = new Parse.Query(Game);
		// var items = [];
		// query.limit(1000);
		// await query.find().then((games) => {
		  // for (var i = games.length-1; i >= 0; i--){
			// var myGame = {
				// id: games[i].id,
				// platforms: games[i].get("platforms"),
				// developer: games[i].get("developer"),
				// avgRating: games[i].get("AvgRating"),
				// steamEmbed: games[i].get("steamEmbed"),
				// title: games[i].get("title"),
				// tags: games[i].get("tags"),
				// description: games[i].get("description"),
				// gamePageUrl: games[i].get("gamePageUrl"),
				// youtubeEmbed: games[i].get("youtubeEmbed"),
				// iconLogo: games[i].get("iconLogo")
			// }
			// items.push(myGame);
		  // }
		  // return items;
	
		// }, (error) => {
		  
		// });
	
		// return items; 
	  }
	saveConvention(newInfo)
	{
		const Convention = Parse.Object.extend('Convention');
		let conventionInfo = new Parse.Query(Convention);
		conventionInfo.equalTo("objectId", newInfo.id);
		conventionInfo.first({
			success: function(theConvention){
				if(theConvention){
					theConvention.set('name', newInfo.name);
					theConvention.set('mapUrl', newInfo.mapUrl);
					theConvention.set('vendorsUrl', newInfo.vendorsUrl);
					theConvention.set('bracketsUrl', newInfo.bracketsUrl);
					theConvention.set('ticketsUrl', newInfo.ticketsUrl);
					theConvention.set('mainPage', newInfo.mainPage);
					theConvention.set('locationV', newInfo.locationV);
					theConvention.set('scheduleUrl', newInfo.scheduleUrl);
					theConvention.set('storePageUrl', newInfo.storePageUrl);
					theConvention.set('Description', newInfo.description);
					theConvention.set('FaQ', newInfo.faq);
					theConvention.set('locationCityState', newInfo.loationCityState);
					theConvention.set('zipcode', newInfo.zipcode);
					theConvention.set('picture', newInfo.picture);
					theConvention.set('lat', newInfo.latitude);
					theConvention.set('lng', newInfo.longitude);
					theConvention.set('iconLogo', newInfo.iconLogo);
					theConvention.save(null, {
						success: function(newConventionCreated)
						{
							console.log("Saved");
						},
						error: function(response, error)
						{
							alert(error.code+' Failed to Save Profile ' + error.message);
						}
					});
				}
			},
			error: function(error){
				console.log("Error: " + error.code);
			}
		}
		);
		for(let i = 0; i < this.currentConventions.length; i++)
		{
			if(this.currentConventions[i].id == newInfo.id)
			{
				this.currentConventions[i] = newInfo;
			}
		}
	}
	saveGame(newInfo)
	{
		const Game = Parse.Object.extend('Game');
		let gameInfo = new Parse.Query(Game);
		gameInfo.equalTo("objectId", newInfo.id);
		gameInfo.first({
			success: function(newGame){
				if(newGame){
					newGame.set('platforms', newInfo.platforms);
					newGame.set('developer', newInfo.developer);
					newGame.set('title', newInfo.title);
					newGame.set('tags', newInfo.tags);
					newGame.set('steamEmbed', newInfo.steamEmbed);
					newGame.set('description', newInfo.description);
					newGame.set('gamePageUrl', newInfo.gamePageUrl);
					newGame.set('youtubeEmbed', newInfo.youtubeEmbed);
					newGame.set('iconLogo', newInfo.iconLogo);
					newGame.save(null, {
						success: function(newGame)
						{
						},
						error: function(response, error)
						{
							alert(error.code+' Failed to Save Profile ' + error.message);
						}
					});
				}
			},
			error: function(error){
				console.log("Error: " + error.code);
			}
		}
		);
		for(let i = 0; i < this.currentGames.length; i++)
		{
			if(this.currentGames[i].id == newInfo.id)
			{
				this.currentGames[i] = newInfo;
			}
		}
	}
	async ratingExists(gameId): Promise<boolean>
	{
		let exists = true;
		const Ratings = Parse.Object.extend('Rating');
		let ratingQ = new Parse.Query(Ratings);
		ratingQ.equalTo("User", this.currentUser);
		await ratingQ.find().then((ratings) => {
			for (var i = ratings.length-1; i >= 0; i--){
				if(ratings[i].get("Game")==gameId)
				{
					exists= false;
				}
			}
		});
		return exists;
	}
	async addRating(gameId, ratingValue)
	{
		const Rating = Parse.Object.extend('Rating');
		let newRating = new Rating();
		newRating.set("User", this.currentUser);
		newRating.set("Game", gameId);
		newRating.set("Rating", ratingValue);
		await newRating.save(null, {
			success: function(savedRating)
			{ 
				 
			},
			error: function(error)
			{
				alert(error.code+' Failed to Add Rating');
			}
		});
		
		let avgRate= 0;
		let sum=0;
		let numRatings = 0;
		const NumberOfRatings = Parse.Object.extend('Rating');
		let ratingCount = new Parse.Query(NumberOfRatings);
		ratingCount.equalTo("Game", gameId);
		ratingCount.find().then((ratings) => {
			for (var i = ratings.length-1; i >= 0; i--){
				sum = sum + parseInt(ratings[i].get("Rating"));
			}
			numRatings = ratings.length;
			
		});
		sum = sum+ratingValue;
		 if(numRatings == 0 || numRatings == undefined)
		 {
			 avgRate = sum;
		 }
		 else{
			 avgRate = sum/numRatings ;
		 }
		const Game = Parse.Object.extend('Game');
		let gameInfo = new Parse.Query(Game);
		gameInfo.equalTo("objectId", gameId);
		gameInfo.first({
			success: function(theGame){
				if(theGame){
					theGame.set('AvgRating', avgRate);
					theGame.save(null, {
						success: function(theGame)
						{
						},
						error: function(response, error)
						{
						}
					});
				}
			},
			error: function(error){
				console.log("Error: " + error.code);
			}
		}
		);
		
		return avgRate;
	}
	/*
	deleteEntree(items, data)
	{
		this.allItems.splice(this.allItems.indexOf(data), 1);
		const Menu = Parse.Object.extend('Menu');
		this.entreeItems = items;
		let query = new Parse.Query(Menu);
		query.equalTo("objectId", data.menuId);
		query.first({
		success: function(data){
			if(data){
				data.destroy();
			} else {
				return null;
			}
		}
	});
	}
	*/
	
}
