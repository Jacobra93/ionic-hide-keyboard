import {Component} from '@angular/core';
import {Capacitor, Plugins} from '@capacitor/core';

const {Keyboard} = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items = [
    'item1',
    'item2',
    'item3',
    'item4',
    'item5',
    'item6',
    'item7',
    'item8',
    'item9',
    'item10',
    'item11',
    'item12',
    'item13',
    'item14',
    'item15',
    'item16',
    'item17',
    'item18',
    'item19',
    'item20',
    'item21',
    'item22',
    'item23',
    'item24',
    'item25',
    'item26',
    'item27',
    'item28',
    'item29',
    'item30',
  ];
  isAvailable = Capacitor.isPluginAvailable('Keyboard');

  constructor() {
  }

  scrolling(ev) {
    console.log('scroller');
    if (this.isAvailable) {
      Keyboard.hide();
    }
  }

  logScrolling(ev) {
    console.log('scroller', ev);
  }

  logScrollEnd() {
    console.log('scroller');
  }
}
