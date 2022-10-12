import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthorsListComponent } from './authors/authors-list.component';
import { AuthorsDetailsComponent } from './authors/authors-details.component';
import { AuthorsComponent } from './authors/authors.component';
import { ToggleComponent } from './toggle/toggle.component';
import { HelloComponent } from './hello/hello.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    AuthorsListComponent,
    AuthorsDetailsComponent,
    ToggleComponent,
    HelloComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
