import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Author, authors } from '../authors.model';

@Component({
  selector: 'authors-details',
  templateUrl: './authors-details.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsDetailsComponent implements OnInit {
  @Input() author: Author;
  @Output() select = new EventEmitter<Author>();
  @Output() delete = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}
}
