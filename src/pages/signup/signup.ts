import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Parse } from 'parse';

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

  constructor(public navCtrl: NavController, private loadCtrl: LoadingController) { }

  ionViewDidLoad() {
    console.log('Initiate Signup');
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
