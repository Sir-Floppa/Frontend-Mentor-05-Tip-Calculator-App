import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent {
  @Input() bill: number;
  @Input() peopleNumber: number;
  @Input() percentage: number;

  calcTipPerPerson() {
    return ((this.bill / 100) * this.percentage) / this.peopleNumber; 
  }
}
