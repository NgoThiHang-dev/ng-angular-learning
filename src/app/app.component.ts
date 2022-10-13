import { Component } from '@angular/core';
import { interval } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-learning-angular';

  currentIndex = 0;
  showTab: boolean = true;

  name: string = 'Hang Ngo';
  currentDate: Date = new Date();

  user = {
    name: 'Hang',
    year: 1999,
  };

  time = 0;
  interval$ = interval(1000);

  addr = {
    address1: 'Hai Chau',
    address2: 'Cam Le',
    city: 'Da Nang',
    state: 'State',
    zip: '12345',
    country: 'VietNam',
  };

  users = [
    {
      name: 'Tiep Phan',
      age: 30,
    },
    {
      name: 'Trung Vo',
      age: 28,
    },
    {
      name: 'Chau Tran',
      age: 29,
    },
    {
      name: 'Tuan Anh',
      age: 16,
    },
  ];

  formatAddress(addr: any) {
    return (
      addr.address1 +
      ', ' +
      addr.address2 +
      ', ' +
      addr.city +
      ', ' +
      addr.state +
      ', ' +
      addr.zip +
      ', ' +
      addr.country +
      '.'
    );
  }

  addUser() {
    this.users.push({ name: 'new user', age: 23 });
    // this.users = [...this.users, { name: 'new user', age: 23 }];
  }

  ngOnInit() {
    // this.interval$.subscribe((val) => {
    //   this.time = val;
    // });
  }
}
