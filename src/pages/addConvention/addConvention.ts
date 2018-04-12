import { Component } from '@angular/core';
import { NavController, ViewController, ModalController } from 'ionic-angular';
import { Data } from '../../providers/data';
import { LocationSelectPage } from '../location-select/location-select';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-addConvention',
  templateUrl: 'addConvention.html'
})
export class AddConventionPage {
	admins = [];
	name;
	mapUrl;
	vendorsUrl;
	bracketsUrl;
	ticketsUrl;
	mainPage;
	locationV;
	scheduleUrl;
	storePageUrl;
	description;
	faq;
	locationCityState;
	zipcode;
	picture;
	
  constructor(public navCtrl: NavController, public view: ViewController, public dataService: Data, public modalCtrl: ModalController, private alertCtrl: AlertController) {


	}
	
	save() {
		
    let newConvention = {
		admins: this.admins,
		name: this.name,
		mapUrl: this. mapUrl,
		vendorsUrl: this.vendorsUrl,
		bracketsUrl: this.bracketsUrl,
		ticketsUrl: this.ticketsUrl,
		mainPage: this.mainPage, 
		locationV: this.locationV, 
		scheduleUrl: this.scheduleUrl, 
		storePageUrl: this.storePageUrl,
		description: this.description,
		faq: this.faq,
		locationCityState: this.locationCityState,
		zipcode: this.zipcode,
		picture: this.picture
    };

	
    this.view.dismiss(newConvention);
  }

	launchLocationPage(){
 
    let modal = this.modalCtrl.create(LocationSelectPage);

    modal.onDidDismiss((location) => {
        console.log(location);
    });

    modal.present();   

}

alertHelp()
{
	alert("This Field should be an embed link to your Event.\n1.)Go to Google Maps, Search for your event then select the left menu button \n2.)Select Share or embed map \n3.)Select Embed a map then only get the value within the src= do not include quotes.\n\n\ni.e. <iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13290.788849037426!2d-84.4043297!3d33.6131599!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x51d53049737d133d!2sDragon+Con+Inc.!5e0!3m2!1sen!2sus!4v1523505329650\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n\n\nNeeds to Be https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13290.788849037426!2d-84.4043297!3d33.6131599!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x51d53049737d133d!2sDragon+Con+Inc.!5e0!3m2!1sen!2sus!4v1523505329650");
}
presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'How Do I Get This?',
	message: 'This Field should be an embed link to your Event. See https://support.google.com/maps/answer/144361?co=GENIE.Platform%3DDesktop&hl=en&oco=1 for instructions. Only get the value within the src= do not include quotes.',
    buttons: ['Dismiss']
  });
  alert.present();

}

  close() {
    this.view.dismiss();
  }
}
