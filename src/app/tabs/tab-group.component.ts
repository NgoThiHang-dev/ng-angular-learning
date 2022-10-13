import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TabPanelComponent } from './tab-panel.component';

@Component({
  selector: 'tab-group',
  templateUrl: '../tabs/tab-group.component.html',
  styleUrls: ['../tabs/tabs.component.css'],
})
export class TabGroupComponent implements OnInit {
  tabPanelList: TabPanelComponent[] = [];
  @Input() activeIndex = 0;

  @Output() activeIndexChange = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  addTab(tab: TabPanelComponent): void {
    this.tabPanelList = [...this.tabPanelList, tab]; // bang this.tabPanelList.push(tab)
  }

  removeTab(tab: TabPanelComponent): void {
    let found = -1;
    this.tabPanelList = this.tabPanelList.filter((tp, index) => {
      if (tp === tab) {
        found = index;
        return false;
      }
      return true;
    });

    if (found === this.activeIndex) {
      this.activeIndexChange.emit(
        found === this.tabPanelList.length ? found - 1 : found
      );
    }
  }
}
