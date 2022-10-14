import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './types';
import { users } from './constants';
import { delay, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserService {
  // getUsers(query?: string): Observable<User[]> {
  //   return of(users).pipe{
  //       delay(2000),
  //       map(data => data.filter(u => {
  //           if(!query) return true;
  //           return (
  //               u.name.toLowerCase().startWith(query.toLowerCase()) ||
  //               u.username.toLowerCase().startWith(query.toLowerCase()) ||
  //               u.email.toLowerCase().startWith(query.toLowerCase())
  //           )
  //       }))
  //   }
  // }
}
