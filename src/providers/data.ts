import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Parse } from 'parse';
@Injectable()
export class Data {

	private parseAppId: string = 'pjhBBiUR9zhM4yVyvzJ4VZqEVdwtIsJOoKZlU6BJ';
	private parseJSKey: string = 'jyIut17JVHHJFTlOVPqqTdhlQ00GUd6tBpOLYrbZ';
	private parseServerUrl: string= 'https://parseapi.back4app.com/';
	public currentUser;

	constructor(public storage: Storage) {
		Parse.initialize(this.parseAppId, this.parseJSKey);
		Parse.serverURL = this.parseServerUrl;

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
	addConvention(item)
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
		newConvention.save(null, {
			success: function(newConvention)
			{
				
			},
			error: function(newConvention, error)
			{
				alert(error.code+' Failed to Add Item ' + newConvention.get("name"));
			}
		});
		
		let id:string = "";
		let query = new Parse.Query(Convention);
		query.equalTo("name", item.name);
		query.first({
			success: function(data){
				if(data){
					id = data.id;
				} else {
					return null;
				}
			}
		});
		newConvention.set("id", id);
	}

	getConventionData() {
		const Convention = Parse.Object.extend('Convention');
		let query = new Parse.Query(Convention);
		var items = [];
		query.limit(1000);
		query.find().then((conventions) => {
		  console.log(conventions.length)
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
				picture: conventions[i].get("picture")
			}
			items.push(myConvention);
		  }
		  return items;
	
		}, (error) => {
		  
		});
	
		return items;
	  }

	addGame(item)
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
		newGame.set("youtubeEmbed", item.youtubeEmbed)
		newGame.save(null, {
			success: function(newGame)
			{
				
			},
			error: function(newGame, error)
			{
				alert(error.code+' Failed to Add Item ' + newGame.get("name"));
			}
		});
		
		let id:string = "";
		let query = new Parse.Query(Game);
		query.equalTo("name", item.title);
		query.first({
			success: function(data){
				if(data){
					id = data.id;
				} else {
					return null;
				}
			}
		});
		newGame.set("id", id);
	}

	getGameData() {
		const Game = Parse.Object.extend('Game');
		let query = new Parse.Query(Game);
		var items = [];
		query.limit(1000);
		query.find().then((games) => {
		  for (var i = games.length-1; i >= 0; i--){
			var myGame = {
				id: games[i].id,
				platforms: games[i].get("platforms"),
				admins: games[i].get("admins"),
				developer: games[i].get("developer"),
				avgRating: games[i].get("avgRating"),
				steamEmbed: games[i].get("steamEmbed"),
				title: games[i].get("title"),
				tags: games[i].get("tags"),
				description: games[i].get("description"),
				gamePageUrl: games[i].get("gamePageUrl"),
				youtubeEmbed: games[i].get("youtubeEmbed")
			}
			items.push(myGame);
		  }
		  return items;
	
		}, (error) => {
		  
		});
	
		return items; 
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
	}
	saveGame(newInfo)
	{
		const Game = Parse.Object.extend('Game');
		let gameInfo = new Parse.Query(Game);
		gameInfo.equalTo("objectId", newInfo.id);
		gameInfo.first({
			success: function(newGame){
				if(newGame){
					newGame.set('username', newInfo.platforms);
					newGame.set('password', newInfo.developer);
					newGame.set('email', newInfo.title);
					newGame.set('facebook', newInfo.tags);
					newGame.set('steamEmbed', newInfo.steamEmbed);
					newGame.set('instagram', newInfo.description);
					newGame.set('gamePageUrl', newInfo.gamePageUrl);
					newGame.set('youtubeEmbed', newInfo.youtubeEmbed);
					newGame.save(null, {
						success: function(newGame)
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
	/*deleteAOrder(newOrders, item)
	{
		const Order = Parse.Object.extend('Order');
		this.orders = newOrders;
		let queryDelete = new Parse.Query(Order);
		queryDelete.equalTo("objectId", item.orderId);
		queryDelete.first({
		success: function(data){
			if(data){
				data.destroy();
			} else {
				return null;
			}
		}
		});
	}
	saveOrder(item)
	{
		const Order = Parse.Object.extend('Order');
		let newOrderI = new Order();
		var numQty=Number (item.qty);
		var numCost=Number (item.totalCost);
		newOrderI.set("menuId", item.menuId);
		newOrderI.set("totalCost", numCost);
		newOrderI.set("itemQty", numQty);
		newOrderI.save(null, {
			success: function(newOrderI)
			{
				
			},
			error: function(newOrderI, error)
			{
				alert(error.code+' Failed to Add Order');
			}
		});
		let id:string = "";
		let queryOrder = new Parse.Query(Order);
		queryOrder.equalTo("menuId", item.menuId);
		queryOrder.first({
			success: function(data){
				if(data){
					id = data.id;
				} else {
					return null;
				}
			}
		});
		const Menu = Parse.Object.extend('Menu');
		let queryMenu = new Parse.Query(Menu);
		queryMenu.equalTo("objectId", item.menuId);
		queryMenu.first({
			success: function(menu){
			var newOrder = 
			{
				name:menu.attributes.name, 
				price:menu.attributes.price, 
				category:menu.attributes.category, 
				url:menu.attributes.url, 
				description:menu.attributes.description,
				menuId:menu.id, 
				orderId:id,
				qty: numQty, 
				totalCost: numCost
			}
			this.orders.push(newOrder);
			}
		});
		
	}

	getEntreesData()
	{
		return this.entreeItems;
	}
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
	getSidesData()
	{
		return this.sideItems;
	}
	deleteSide(items, data)
	{
		this.allItems.splice(this.allItems.indexOf(data), 1);
		const Menu = Parse.Object.extend('Menu');
		this.sideItems = items;
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
	getDessertsData()
	{
		return this.dessertItems;
	}
	deleteDessert(items, data)
	{
		this.allItems.splice(this.allItems.indexOf(data), 1);
		const Menu = Parse.Object.extend('Menu');
		this.dessertItems = items;
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
	getDrinksData()
	{
		return this.drinkItems;
	}
	deleteDrink(items, data)
	{
		this.allItems.splice(this.allItems.indexOf(data), 1);
		const Menu = Parse.Object.extend('Menu');
		this.drinkItems = items;
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
	getAllData()
	{
		return this.allItems;
	}
	clearItems()
	{
		this.allItems = [];
		this.entreeItems = [];
		this.sideItems = [];
		this.dessertItems = [];
		this.drinkItems = [];
	}
	saveItems(item)
	{
		this.allItems.push(item);

		if(item.category == "Entree")
		{
			this.entreeItems.push(item);
		}
		if(item.category == "Side Dish")
		{
		  this.sideItems.push(item);
		}
		if(item.category == "Dessert")
		{
		  this.dessertItems.push(item);
		}
		if(item.category == "Drink")
		{
		  this.drinkItems.push(item);
		}

		const Menu = Parse.Object.extend('Menu');
		let saveQuery = new Parse.Query(Menu);
		saveQuery.equalTo("objectId", item.menuId);
		saveQuery.first({
			success: function(menuObject){
				if(menuObject){
					menuObject.set('name', item.name);
					menuObject.set('price', parseFloat(item.price));
					menuObject.set('category', item.category);
					menuObject.set('photoUrl', item.url);
					menuObject.set('description', item.description);
					menuObject.save(null, {
						success: function(newObj)
						{
							console.log("Saved");
						},
						error: function(response, error)
						{
							alert(error.code+' Failed to Add Item ' + error.message);
						}
					});
				}
			},
			error: function(error){
				console.log("Error: " + error.code);
			}
		}
		);
		return;
	}*/
}
