import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../models/User.model';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      drink: ['', Validators.required],
      hobbies: this.formBuilder.array([]),
    });
  }

  onSubmitForm() {
    const userValue = this.userForm.value;
    const newUser = new User(
      userValue['firstName'],
      userValue['lastName'],
      userValue['email'],
      userValue['drink'],
      userValue['hobbies'] ? userValue['hobbies'] : []
    );
    this.userService.addUsers(newUser);
    this.router.navigate(['/users']);
  }

  getHobbies() {
    return this.userForm.get('hobbies') as FormArray;
  }
  onAddHobby() {
    const newHobby = this.formBuilder.control('', Validators.required);
    this.getHobbies().push(newHobby);
    console.log(this.userForm.value);
  }

}
