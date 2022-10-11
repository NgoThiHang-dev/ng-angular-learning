import { Component, OnInit, Input } from '@angular/core';
import { Author, authors } from '../authors.model';

@Component({
  selector: 'authors-details',
  templateUrl: './authors-details.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsDetailsComponent implements OnInit {
  @Input() author: Author;

  constructor() {}

  ngOnInit(): void {
    console.log('list');
    console.log(authors);
  }
}
