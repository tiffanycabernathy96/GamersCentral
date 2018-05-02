import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Parse } from 'parse';
import { Facebook } from '@ionic-native/facebook'

// Providers
import { Data } from '../../providers/data';

// Pages
import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';

declare var window: any;

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {
  registerPage = SignupPage;
  password: string = '';
  username: string = '';

  isLoggedIn: boolean = false;
  users: any;

  constructor(public navCtrl: NavController, public data: Data, private loadCtrl: LoadingController, private fb: Facebook) { 
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

          var user = new Parse.User();
          user.set("username", this.users.email);
          user.set("password", this.users.id);
          user.set("email", this.users.email);
          user.set("platforms", null);
	        user.set("likedGenres", null);
	        user.set("picture", null);
	        user.set("locationCityState", null);
	        user.set("zipcode", null);

          user.signUp(null, {
            success: function(user){
              Parse.User.logIn(this.users.email, this.users.id, {  //use id as password. 
                success: function(user) {
                  // Do stuff after successful login.
                  this.navCtrl.setRoot(TabsPage);
                },
                error: function(user, error) {
                  // The login failed. Check error to see why.
                }
              });
            },
            error: function(user, error) {
              // Show the error message somewhere and let the user try again.
              alert("Error: " + error.code + " " + error.message);
              //means the users has already signed up, so do login.
          
              Parse.User.logIn(this.users.email, this.users.id, {
                success: function(user) {
                // Do stuff after successful login.
                },
                error: function(user, error) {
                // The login failed. Check error to see why.
                }
              });
            }
          });

        } else {
          this.isLoggedIn = false;
        }
      })
      .catch(e => console.log('Error logging into Facebook', e));
  }

  logout() {
    this.fb.logout()
      .then( res => this.isLoggedIn = false)
      .catch(e => console.log('Error logout from Facebook', e));
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
