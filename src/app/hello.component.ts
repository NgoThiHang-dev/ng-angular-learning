import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>{{ name }}</h1>`,
})
export class HelloComponent {
  // constructor() {

  // }

  @Input() name: string;

  ngOnInit(): void {
    console.log('Hi Init');
  }

  ngOnDestroy(): void {
    console.log('Hi Destroy');
  }
}
