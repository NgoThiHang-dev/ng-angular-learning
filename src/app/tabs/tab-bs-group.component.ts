import { Component, forwardRef } from '@angular/core';
import { TabGroupComponent } from './tab-group.component';

const tabBSGroupComponent = [
  {
    provide: TabGroupComponent,
    useExisting: forwardRef(() => TabBSGroupComponent),
  },
];

@Component({
  selector: 'tab-bs-group',
  templateUrl: '../tabs/tab-bs-group.component.html',
  styleUrls: ['../tabs/tabs.component.css'],
  //   providers: [
  //     {
  //       provide: TabGroupComponent,
  //       useExisting: TabBSGroupComponent,
  //     },
  //   ],
  providers: tabBSGroupComponent,
})
export class TabBSGroupComponent extends TabGroupComponent {}
