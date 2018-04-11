import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Parse } from 'parse';
import { Camera, CameraOptions } from '@ionic-native/camera';
// Pages
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  password: string = '';
  confirm: string = '';
  username: string = '';
  verify: string = '';
  email: string = '';
  platforms = [];
  likedGenres =[];
	picture="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png";
  constructor(public navCtrl: NavController, private loadCtrl: LoadingController, private camera: Camera) { }

  ionViewDidLoad() {
    console.log('Initiate Signup');
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
  public doRegister() {
    var user = new Parse.User();
	console.log(this.password + " " + this.confirm);
	if(this.password == this.confirm)
	{
		let loader = this.loadCtrl.create({
		content: 'Signing up...'
		});
		loader.present();
      user.set("username", this.username);
      user.set("password", this.password);
      user.set("email", this.email);
	  user.set("platforms",this.platforms);
	  user.set("likedGenres",this.likedGenres);
	  user.set("picture",this.picture);
		var self = this;
      user.signUp(null, {
        success: function(user) {
          // Hooray! Let them use the app now.
          console.log("signup success");
		  loader.dismissAll();
		  self.navCtrl.pop();
        },
        error: function(user, error) {
          // Show the error message somewhere and let the user try again.
          alert("Error: " + error.code + " " + error.message);
		  loader.dismissAll();
        }
      });


    console.log("sign up");
	}
	else{
		alert("Error: Passwords Do Not Match");
	}
  }

}
