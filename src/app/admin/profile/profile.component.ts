import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model'
import { UserService } from '../../services/user.service'
import { LoginService } from '../../services/login.service'
import { FormGroup,FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  profileForm : FormGroup

  constructor(private loginService : LoginService, private userService: UserService, private fb: FormBuilder) { }

  ngOnInit() {

    this.userService.getUser(this.loginService.user().id).subscribe(
      user => {
        console.log(user);
        this.user = user;
      });

      this.profileForm = this.fb.group({
        first_name: this.fb.control('',[Validators.required]),
        last_name: this.fb.control('',[Validators.required]),

      });
    }

  }
