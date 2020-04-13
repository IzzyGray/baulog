import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public rooms = [
    { val: 'Wohnzimmer', isChecked: true },
    { val: 'Küche', isChecked: false },
    { val: 'Esszimmer', isChecked: false },
    { val: 'Bad', isChecked: false },
    { val: 'Kinderzimmer', isChecked: false },
    { val: 'Arbeitszimmer', isChecked: false },
    { val: 'Keller', isChecked: false }
  ];

  constructor() {

  }

  /* addRoom(){
    this.rooms.push(val:'Dachboden', isChecked:true);
  } */

}
