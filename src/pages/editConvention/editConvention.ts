import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Data } from '../../providers/data';


@Component({
  selector: 'page-editConvention',
  templateUrl: 'editConvention.html'
})
export class EditConventionPage {
	id;
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
  constructor(public params: NavParams, public view: ViewController, public dataService: Data) {
	this.id = params.get('item').id;
	this.name = params.get('item').name;
	this.mapUrl = params.get('item').mapUrl;
	this.vendorsUrl = params.get('item').vendorsUrl;
	this.bracketsUrl = params.get('item').bracketsUrl;
	this.ticketsUrl = params.get('item').ticketsUrl;
	this.mainPage = params.get('item').mainPage;
	this.locationV = params.get('item').locationV;
	this.scheduleUrl = params.get('item').scheduleUrl;
	this.storePageUrl = params.get('item').storePageUrl;
	this.description = params.get('item').description;
	this.faq = params.get('item').faq;
  }
	ionViewWillEnter()
	{

	}

  
	save() {
		
		let newConvention = {
			id: this.id,
			admins: this.admins,
			name: this.name,
			mapUrl: this.mapUrl,
			vendorsUrl: this.vendorsUrl,
			bracketsUrl: this.bracketsUrl,
			ticketsUrl: this.ticketsUrl,
			mainPage: this.mainPage,
			locationV: this.locationV,
			scheduleUrl: this.scheduleUrl,
			storePageUrl: this.storePageUrl,
			description: this.description,
			faq: this.faq
    };
		this.dataService.saveConvention(newConvention);
		this.view.dismiss();
  }
alertHelp()
{
	alert("This Field should be an embed link to your Event.\n1.)Go to Google Maps, Search for your event then select the left menu button \n2.)Select Share or embed map \n3.)Select Embed a map then only get the value within the src= do not include quotes.\n\n\ni.e. <iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13290.788849037426!2d-84.4043297!3d33.6131599!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x51d53049737d133d!2sDragon+Con+Inc.!5e0!3m2!1sen!2sus!4v1523505329650\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n\n\nNeeds to Be https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13290.788849037426!2d-84.4043297!3d33.6131599!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x51d53049737d133d!2sDragon+Con+Inc.!5e0!3m2!1sen!2sus!4v1523505329650");
}
  close() {
    this.view.dismiss();
  }
}
