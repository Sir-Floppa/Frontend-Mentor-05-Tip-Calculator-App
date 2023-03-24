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
}
