import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../models/User.model';
import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  users: User[];
  usersSubscription: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.usersSubscription = this.userService.usersSubject.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    );
    this.userService.emitUsers();
  }

  ngOnDestroy() {
    this.usersSubscription.unsubscribe();
  }

}
