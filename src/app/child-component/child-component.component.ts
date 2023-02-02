import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
})
export class ChildComponentComponent implements OnInit {
  //cach 1: su dungj Output va EventEmitter
  // count = 5;
  // @Output() countChanged: EventEmitter<number> = new EventEmitter<number>();

  // increment() {
  //   this.count++;
  //   this.countChanged.emit(this.count);
  // }

  // decrement() {
  //   this.count--;
  //   this.countChanged.emit(this.count);
  // }

  //cach 2: tien hanh luu bien cuc bo
  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  constructor() {}

  ngOnInit(): void {}
}
