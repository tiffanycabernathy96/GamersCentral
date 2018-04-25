import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Parse } from 'parse';
import { Facebook } from '@ionic-native/facebook';

// Providers
import { Data } from '../../providers/data';

// Pages
import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {
	registerPage = SignupPage;
	password: string = '';
	username: string = '';
	isLoggedIn:boolean = false;
	users: any;
  constructor(public navCtrl: NavController, public data:Data, private loadCtrl: LoadingController, private fb: Facebook) { 
	fb.getLoginStatus()
    .then(res => {
      console.log(res.status);
      if(res.status === "connect") {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    })
    .catch(e => console.log(e));
  }
login() {
  this.fb.login(['public_profile', 'user_friends', 'email'])
    .then(res => {
      if(res.status === "connected") {
        this.isLoggedIn = true;
        this.getUserDetail(res.authResponse.userID);
      } else {
        this.isLoggedIn = false;
      }
    })
    .catch(e => console.log('Error logging into Facebook', e));
}
getUserDetail(userid) {
  this.fb.api("/"+userid+"/?fields=id,email,name,picture,gender",["public_profile"])
    .then(res => {
      console.log(res);
      this.users = res;
    })
    .catch(e => {
      console.log(e);
    });
}
  ionViewDidLoad() {
    console.log('Initiated Signin');
  }

  public doSignin() {
    let loader = this.loadCtrl.create({
      content: 'Signing in...'
    });
    loader.present();
	var self = this;
	Parse.User.logIn(this.username, this.password, 
	{
		success: function(user)
		{	
			self.navCtrl.setRoot(TabsPage);
			self.data.setCurrentUser(user);
			loader.dismissAll();
		},
		error: function(user, error)
		{
			loader.dismissAll();
		}
	});
  }

}
