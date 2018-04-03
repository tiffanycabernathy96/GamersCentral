import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Parse } from 'parse';
@Injectable()
export class Data {

	private parseAppId: string = 'pjhBBiUR9zhM4yVyvzJ4VZqEVdwtIsJOoKZlU6BJ';
	private parseJSKey: string = 'jyIut17JVHHJFTlOVPqqTdhlQ00GUd6tBpOLYrbZ';
	private parseServerUrl: string= 'https://parseapi.back4app.com/';
	
	constructor(public storage: Storage) {
		Parse.initialize(this.parseAppId, this.parseJSKey);
		Parse.serverURL = this.parseServerUrl;
		
		/*const Menu = Parse.Object.extend('Menu');
		let query = new Parse.Query(Menu);
		var selfStart = this;
		query.limit(1000);
		query.find().then((menus) => {
			for(var i = 0; i < menus.length; i++){
				var mymenu = {
					name:menus[i].get("name"), 
					price:menus[i].get("price"), 
					category:menus[i].get("category"), 
					url:menus[i].get("photoUrl"), 
					description:menus[i].get("description"),
					menuId:menus[i].id
				}
				selfStart.allItems.push(mymenu);
				if(menus[i].get("category") == "Entree")
				{
					selfStart.entreeItems.push(mymenu);
				}
				if(menus[i].get("category") == "Side Dish")
				{
					selfStart.sideItems.push(mymenu);
				}
				if(menus[i].get("category") == "Dessert")
				{
					selfStart.dessertItems.push(mymenu);
				}
				if(menus[i].get("category") == "Drink")
				{
					selfStart.drinkItems.push(mymenu);
				}
				}
			}
		);


		const Order = Parse.Object.extend('Order');
		let query2 = new Parse.Query(Order);
		var this2 = this;
		query2.limit(1000);
		query2.find().then((newOrders) => {
			for(var i = 0; i < newOrders.length; i++){
				let menuIdTemp = newOrders[i].get("menuId")
				for(var t = 0; t < this2.allItems.length; t++)
				{
					if(this2.allItems[t].menuId == menuIdTemp)
					{
						var myorder = {
						name:this2.allItems[t].name, 
						price:this2.allItems[t].price, 
						category:this2.allItems[t].category, 
						url:this2.allItems[t].url, 
						description:this2.allItems[t].description,
						menuId:newOrders[i].get("menuId"), 
						totalCost:newOrders[i].get("totalCost"), 
						qty:newOrders[i].get("itemQty"), 
						orderId:newOrders[i].id
						}
						this2.orders.push(myorder);
					}
				}
			}
		}
		);*/
	}

	addConvention(item)
		{
			const Convention = Parse.Object.extend('Convention');
			let newConvention = new Convention();
			var num=Number (item.price);
			newConvention.set("admins", item.admins);
			newConvention.set("name", item.name);
			newConvention.set("mapUrl", item.mapUrl);
			newConvention.set("vendorsUrl", item.vendorsUrl);
			newConvention.set("bracketsUrl", item.bracketsUrl);
			newConvention.set("ticketsUrl", item.ticketsUrl);
			newConvention.set("evenMngr", item.eventMngr);
			newConvention.set("locationV", item.locationV);
			newConvention.set("scheduleUrl", item.scheduleUrl);
			newConvention.set("storePageUrl", item.storePageUrl);
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
						this.id = data.id;
					} else {
						return null;
					}
				}
			});
		}

		addGame(item)
		{
			const Game = Parse.Object.extend('Game');
			let newGame = new Game();
			var num=Number (item.price);
			newGame.set("platforms", item.platforms);
			newGame.set("admins", item.admins);
			newGame.set("developer", item.developer);
			newGame.set("avgRating", item.avgRating);
			newGame.set("title", item.title);
			newGame.set("tags", item.tags);
			newGame.set("description", item.description);
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
			query.equalTo("name", item.name);
			query.first({
				success: function(data){
					if(data){
						this.id = data.id;
					} else {
						return null;
					}
				}
			});
		}

			/*var myconventions = 
			{
				name:item.name, 
				price:num, 
				category:item.category, 
				url:item.url, 
				description:item.description,
				menuId:id
			
			}
			this.allItems.push(mymenu);
			if(newMenu.get("category") == "Entree")
			{
				this.entreeItems.push(mymenu);
			}
			if(newMenu.get("category") == "Side Dish")
			{
			  this.sideItems.push(mymenu);
			}
			if(newMenu.get("category") == "Dessert")
			{
			  this.dessertItems.push(mymenu);
			}
			if(newMenu.get("category") == "Drink")
			{
			  this.drinkItems.push(mymenu);
			}*/

	/*getOrders()
	{
		this.orders = [];
		const Order = Parse.Object.extend('Order');
		let queryGetOrders = new Parse.Query(Order);
		queryGetOrders.limit(1000);
		queryGetOrders.find().then((newOrders) => {
			for(var i = 0; i < newOrders.length; i++){
				let menuIdTemp = newOrders[i].get("menuId")
				for(var t = 0; t < this.allItems.length; t++)
				{
					if(this.allItems[t].menuId == menuIdTemp)
					{
						var myorder = {
						name:this.allItems[t].name, 
						price:this.allItems[t].price, 
						category:this.allItems[t].category, 
						url:this.allItems[t].url, 
						description:this.allItems[t].description,
						menuId:newOrders[i].get("menuId"), 
						totalCost:newOrders[i].get("totalCost"), 
						qty:newOrders[i].get("itemQty"), 
						orderId:newOrders[i].id
						}
						this.orders.push(myorder);
					}
				}
			}
		}
		);
		return this.orders;
	}
	deleteAOrder(newOrders, item)
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
