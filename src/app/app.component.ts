import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-learning-angular';

  user = {
    name: 'Hang',
    age: 29,
  };

  handler() {
    console.log('hi Bap');
  }
}
