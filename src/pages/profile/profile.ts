import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { Data } from '../../providers/data';
import { EditProfilePage } from '../editProfile/editProfile';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  
})
export class ProfilePage {
	public user;
	email: string;
	username: string;
	password: string;
	facebook: string;
	twitter: string;
	instagram: string;
	picture: string;
	likedGenres =[];
	combinedGenres:string;
	platforms = [];
	locationCityState;
	zipcode;
	combinedPlatforms:string;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {
	this.user = this.dataService.getCurrentUser();
	this.email=this.user.attributes.email;
	this.username = this.user.attributes.username;
	this.password=this.user.attributes.password;
	this.facebook = this.user.attributes.facebook;
	this.twitter = this.user.attributes.twitter;
	this.instagram = this.user.attributes.instagram;
	this.picture = this.user.attributes.picture;
	this.likedGenres = this.user.attributes.likedGenres;
	this.platforms = this.user.attributes.platforms;
	this.locationCityState = this.user.attributes.locationCityState;
	this.zipcode = this.user.attributes.zipcode;
  }
  ionViewWillEnter()
  {
	this.user = this.dataService.getCurrentUser();
	this.email=this.user.attributes.email;
	this.username = this.user.attributes.username;
	this.password=this.user.attributes.password;
	this.facebook = this.user.attributes.facebook;
	this.twitter = this.user.attributes.twitter;
	this.instagram = this.user.attributes.instagram;
	this.picture = this.user.attributes.picture;
	this.likedGenres = this.user.attributes.likedGenres;
	this.platforms = this.user.attributes.platforms;
	this.locationCityState = this.user.attributes.locationCityState;
	this.zipcode = this.user.attributes.zipcode;
  }
  editProfile() {
	  let addModal = this.modalCtrl.create(EditProfilePage);

    addModal.onDidDismiss( (item)=> {
		if(item)
		{
			this.username = item.username;
			this.email = item.email;
			this.password = item.password;
			this.facebook = item.facebook;
			this.twitter = item.twitter; 
			this.instagram = item.instagram;
			this.picture = item.picture;
			this.likedGenres = item.likedGenres; 
			this.platforms = item.platforms;
			this.locationCityState = item.locationCityState;
			this.zipcode = item.zipcode;
		}
		/*this.user = this.dataService.getCurrentUser();
		this.email=this.user.attributes.email;
		this.username = this.user.attributes.username;
		this.password=this.user.attributes.password;
		this.facebook = this.user.attributes.facebook;
		this.twitter = this.user.attributes.twitter;
		this.instagram = this.user.attributes.instagram;
		this.picture = this.user.attributes.picture;
		this.likedGenres = this.user.attributes.likedGenres;
		this.platforms = this.user.attributes.platforms;
		this.locationCityState = this.user.attributes.locationCityState;
		this.zipcode = this.user.attributes.zipcode;*/
    });
    addModal.present();

  }
}