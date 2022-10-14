import { Component } from '@angular/core';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { User } from './types';
import { FormControl } from '@angular/forms';
import { debounceTime, map, startWith, switchAll, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = 'Angular';
  queryControl = new FormControl('');
  users: User[] = [];
  loading: boolean = true;

  constructor(private readonly userService: UserService) {}

  ngOnInit() {
    //   this.queryControl.valueChanges
    //     .pipe(
    //       debounceTime(500),
    //       tap(() => {
    //         this.loading = true;
    //       }),
    //       startWith(''),
    //       map((query) =>
    //         this.userService.getUsers(query: any).pipe(
    //           tap(() => {
    //             this.loading = false;
    //           })
    //         )
    //       ),
    //       switchAll()
    //     )
    //     .subscribe((users) => {
    //       this.users = users;
    //     });
  }
}
