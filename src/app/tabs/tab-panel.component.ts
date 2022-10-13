import {
  Component,
  ContentChild,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { TabPanelContentDirective } from './tab-content.directive';
import { TabGroupComponent } from './tab-group.component';

@Component({
  selector: 'tab-panel',
  templateUrl: '../tabs/tab-panel.component.html',
  styleUrls: ['../tabs/tabs.component.css'],
})
export class TabPanelComponent implements OnInit {
  @Input() title: string;
  @ViewChild(TemplateRef, { static: true }) impliciBody: TemplateRef<unknown>;
  @ContentChild(TemplateRef, { static: true, read: TemplateRef })
  explicitBody: TemplateRef<unknown>;

  constructor(private tabGroup: TabGroupComponent) {}

  get panelBody(): TemplateRef<unknown> {
    return this.explicitBody || this.impliciBody;
  }

  ngOnInit(): void {
    this.tabGroup.addTab(this);
  }

  ngOnDestroy(): void {
    this.tabGroup.removeTab(this);
  }
}
