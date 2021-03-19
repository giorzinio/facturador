import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor() {}
  ionViewDidEnter() {
    document.querySelector('#tab-button-tab3').shadowRoot.querySelector('.button-native').setAttribute('style', 'margin-top: -14px'); 
    // document.querySelector('#tab-button-tab3')
    // .querySelector('ion-icon')
    // .shadowRoot.querySelector('.icon-inner')
    // .setAttribute('style', 'background: white; border-radius: 20px');
  }
}
