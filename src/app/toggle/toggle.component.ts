import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css'],
})
export class ToggleComponent implements OnInit {
  @Input() checked: boolean;
  @Output() checkedChange = new EventEmitter<boolean>();

  // @Input() header: string;
  // @Input() content: string;
  @Input() question: string;
  @Input() canSkip: boolean;
  @Output() skip = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
}