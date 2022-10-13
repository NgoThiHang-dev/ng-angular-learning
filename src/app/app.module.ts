import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabBSGroupComponent } from './tabs/tab-bs-group.component';
import { TabGroupComponent } from './tabs/tab-group.component';
import { TabPanelComponent } from './tabs/tab-panel.component';
import { CounterComponent } from './counter/counter.component';
import { TabPanelContentDirective } from './tabs/tab-content.directive';
import { FormatAddressPipe } from './format-address.pipe';
import { AdultPipe } from './adult.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TabPanelComponent,
    TabGroupComponent,
    TabBSGroupComponent,
    CounterComponent,
    TabPanelContentDirective,
    FormatAddressPipe,
    AdultPipe,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
