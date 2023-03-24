import { Component } from '@angular/core';

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
  
  checkCustom() {
    const customCheck = document.querySelector('#radio-custom');
    (<HTMLFormElement>customCheck)['checked'] = true;
    console.log(this.percentage)
  }
  
  asignCustom() {
    this.percentage = this.customPercentage;
  }
}
