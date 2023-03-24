import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  bill: number;
  peopleNumber: number;
  percentage: number;

  resetEvent: Subject<void> = new Subject<void>();

  resetPanel() {
    this.resetEvent.next();
  }
}
