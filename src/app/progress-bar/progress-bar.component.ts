import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
})
export class ProgressBarComponent implements OnInit, OnChanges {
  @Input() backgroundColor: string = '#9e9e9e';
  @Input() progressColor: string = 'dodgerblue';
  // progress: number = 78;

  constructor() {}

  @Input() set progress(value: number) {
    this._progress = value;

    if (typeof value !== 'number') {
      const progress = Number(value);
      if (Number.isNaN(progress)) {
        this._progress = 0;
      } else {
        this._progress = progress;
      }
    } else {
      this._progress = value;
    }

    console.log(value);
  }
  private _progress = 50;
  get progress() {
    return this._progress;
  }

  ngOnInit(): void {
    console.log('init', {
      progress: this.progress,
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor,
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', {
      progress: this.progress,
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor,
    });
  }
}
