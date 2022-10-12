import {
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ToggleComponent } from './toggle/toggle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // @ViewChild('toggleComp') toggleComp: ToggleComponent;
  // @ViewChild(ToggleComponent, { static: true }) toggleComp: ToggleComponent;
  @ViewChildren(ToggleComponent) toggleComp: QueryList<ToggleComponent>;

  @ViewChild('nameInput') nameInput: ElementRef<HTMLInputElement>;

  title = 'ng-learning-angular';
  checked: boolean = true;
  showLast: boolean = true;

  ngOnInit() {
    setTimeout(() => {
      this.nameInput.nativeElement.focus();
    }, 3000);
    // console.log('onInit', this.toggleComp);
  }

  ngAfterViewInit() {
    console.log(this.nameInput);
    // apiCall.subscribe(() => {
    //   this.toggleComp.toggle();
    // });

    this.toggleComp.changes.subscribe(console.log);
  }
}
