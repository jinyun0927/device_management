import { User } from '../models/User.model';
import { Subject } from 'rxjs';

export class UserService {

    users: User[] = [
        {firstName: 'James',
         lastName: 'Smith',
         email: 'james@smith.com',
         drink: 'Coco',
         hobbies: ['coder',
                  'la dégustation de café']
        },
      ];
    usersSubject = new Subject<User[]>();
    emitUsers() {
        this.usersSubject.next(this.users.slice());
    }
    addUsers(user: User) {
        this.users.push(user);
        this.emitUsers();
    }
}
