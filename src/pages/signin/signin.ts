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
      .then (async res => {
        if(res.status === "connected") {
          this.isLoggedIn = true;
          await this.getUserDetail(res.authResponse.userID);
          //this.doFBLogin();
          var user = new Parse.User();
          user.set("username", this.users.email);
          user.set("password", this.users.id);
          user.set("email", this.users.email);
          user.set("platforms", null);
	        user.set("likedGenres", null);
	        user.set("picture", null);
	        user.set("locationCityState", null);
	        user.set("zipcode", null);
          var self = this;
          user.signUp(null, {
            success: function(user) {
              Parse.User.logIn(this.users.email, this.users.id, {  //use id as password. 
                success: function(user) {
                  self.navCtrl.setRoot(TabsPage);
                },
                error: function(user, error) {
                  //alert("Error: " + error.code + " " + error.message);
                }
              });
            },
            error: function(user) {
              //alert("Did not create account.");
              //alert("Error: " + error.code + " " + error.message);
              //means the users has already signed up, so do login.
              /*Parse.User.login(this.users.email, this.users.id, {
                success: function(user){
                  this.navCtrl.setRoot(TabsPage);
                },
                error: function (user, error) {
          
                }
              });*/
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

 async getUserDetail(userid) {
    await this.fb.api("/"+userid+"/?fields=id,email,name,picture,gender",["public_profile"])
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
