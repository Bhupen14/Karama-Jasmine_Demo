import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getUsers(): Array<{}> {
    return [
        {
            name: 'user1',
            surname: 'usersurname1'
        }
    ];
}
}
