import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-learning-angular';

  // @Input() backgroundColor: string;
  // @Input() progressColor: string;
  // @Input() progress = 0;
  currentProgress = 70;
}
