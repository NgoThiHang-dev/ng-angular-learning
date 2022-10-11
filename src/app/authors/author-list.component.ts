import { Component, OnInit } from '@angular/core';
import { authors } from '../authors.model';

@Component({
  selector: 'authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsListComponent implements OnInit {
  authors = authors;

  constructor() {}

  ngOnInit(): void {
    console.log('list');
    console.log(authors);
  }
}
