import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Data } from '../../providers/data';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-editProfile',
  templateUrl: 'editProfile.html'
})
export class EditProfilePage {

	public user;
	email: string;
	username: string;
	password: string;
	facebook: string;
	twitter: string;
	instagram: string;
	picture: string;
	likedGenres =[];
	platforms = [];
	newPicture;
	
  constructor(public view: ViewController, public dataService: Data, private camera: Camera) {
	this.user = this.dataService.getCurrentUser();
	this.email=this.user.attributes.email;
	this.username = this.user.attributes.username;
	this.password=this.user.attributes.password;
	this.facebook = this.user.attributes.facebook;
	this.twitter = this.user.attributes.twitter;
	this.instagram = this.user.attributes.instagram;
	//this.picture = this.user.attributes.image;
	this.picture = this.user.attributes.picture;
	this.likedGenres = this.user.attributes.likedGenres;
	this.platforms = this.user.attributes.platforms;
  }
  options: CameraOptions = {
	  quality: 100, 
	  destinationType: this.camera.DestinationType.DATA_URL, 
	  encodingType: this.camera.EncodingType.JPEG,
	  mediaType: this.camera.MediaType.PICTURE
  }
  takePicture(){
	  this.camera.getPicture(this.options).then(
      (imagePath) => {
		  this.picture = 'data:image/jpeg;base64,' + imagePath;
      },
      (err) => {
        alert("Error Uploading Image"); 
      }
    );
  }
	save() {
		let newProfile = {
		id: this.user.id,
		email: this.email,
		username: this.username,
		password: this.password,
		facebook: this.facebook,
		twitter: this.twitter,
		instagram: this.instagram,
		picture: this.picture,
		likedGenres: this.likedGenres,
		platforms: this.platforms
    };
		this.dataService.saveProfile(newProfile);
		this.view.dismiss();
  }

  close() {
    this.view.dismiss();
  }
}
