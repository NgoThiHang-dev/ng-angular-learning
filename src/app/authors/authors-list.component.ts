import { Component, OnInit } from '@angular/core';
import { Author, authors } from '../authors.model';

@Component({
  selector: 'authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsListComponent implements OnInit {
  authors = authors;
  currentAuthor = authors[0];

  constructor() {}

  ngOnInit(): void {
    // console.log('currentAuthor');
    // console.log(this.currentAuthor);
  }

  onSelected(selectedAuthor: Author): void {
    this.currentAuthor = selectedAuthor;
  }

  onDelete(id: number) {
    this.authors = this.authors.filter((author) => {
      return author.id !== id;
    });

    if (this.currentAuthor.id === id) {
      this.currentAuthor = this.authors[0];
    }
  }
}
