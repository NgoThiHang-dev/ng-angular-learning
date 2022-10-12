import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthorsListComponent } from './authors/authors-list.component';
import { AuthorsDetailsComponent } from './authors/authors-details.component';
import { AuthorsComponent } from './authors/authors.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    AuthorsListComponent,
    AuthorsDetailsComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
