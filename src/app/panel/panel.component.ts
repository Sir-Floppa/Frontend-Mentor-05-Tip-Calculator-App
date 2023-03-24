import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit{
  bill?: number;
  peopleNumber?: number;
  percentage?: number;
  
  customPercentage?: number;

  private eventSubscription: Subscription;
  
  @Output() billEvent = new EventEmitter<number>();
  @Output() peopleEvent = new EventEmitter<number>();
  @Output() percentageEvent = new EventEmitter<number>();
  
  @Input() resetEvent: Observable<void>;
  
  ngOnInit(): void {
    this.eventSubscription = this.resetEvent.subscribe(() => {
      this.bill = undefined;
      this.peopleNumber = undefined;
      this.percentage = undefined;
      this.customPercentage = undefined;
    })
  }

  checkCustom() {
    const customCheck = document.querySelector('#radio-custom');
    (<HTMLFormElement>customCheck)['checked'] = true;
  }
  
  asignCustom() {
    this.percentage = this.customPercentage;
  }
}
