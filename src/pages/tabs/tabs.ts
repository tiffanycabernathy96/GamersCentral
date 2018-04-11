import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { GamesPage } from '../games/games';
import { ConventionsPage } from '../conventions/conventions';
import { ProfilePage } from '../profile/profile';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = GamesPage;
  tab3Root = ConventionsPage;
  tab4Root = ProfilePage;

  constructor() {

  }
	
}
