import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-learning-angular';

  currentIndex = 0;
  showTab: boolean = true;

  ngOnInit() {}
}
