import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {
  bill: number;
  peopleNumber: number;
  percentage: number;

  customPercentage: number;

  @Output() billEvent = new EventEmitter<number>();
  @Output() peopleEvent = new EventEmitter<number>();
  @Output() percentageEvent = new EventEmitter<number>();
  
  checkCustom() {
    const customCheck = document.querySelector('#radio-custom');
    (<HTMLFormElement>customCheck)['checked'] = true;
  }
  
  asignCustom() {
    this.percentage = this.customPercentage;
  }
}
