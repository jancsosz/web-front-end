import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserDTO} from '../../models/dto/UserDTO';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  token = '';
  signUpForm: FormGroup;


  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  public signup(): void {
    this.loginService.signUpPOST(this.createUserDTO())
      .then(result => {
        this.token = result;
        localStorage.setItem('token', result);
        localStorage.setItem('username', this.signUpForm.get('username').value);
        this.router.navigate(['home']);
      });
  }

  private createForm(): void {
    this.signUpForm = this.formBuilder.group({
      username: [undefined, Validators.required],
      password: [undefined, [Validators.required]],
      email: [undefined, [Validators.required, Validators.email]]
    });
  }

  private createUserDTO(): UserDTO {
    return {
      username: this.signUpForm.get('username').value,
      password: this.signUpForm.get('password').value,
      email: this.signUpForm.get('email').value
    } as UserDTO;
  }

}
