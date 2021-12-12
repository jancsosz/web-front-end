import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  token: string;
  loginForm: FormGroup;

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  public login(): void {
    this.loginService.loginPOST(this.loginForm.get('username').value, this.loginForm.get('password').value)
      .then(result => {
        this.token = result;
        localStorage.setItem('token', result);
        localStorage.setItem('username', this.loginForm.get('username').value);
        this.router.navigate(['home']);
    });
  }

  private createForm(): void {
    this.loginForm = this.formBuilder.group({
      username: [undefined, Validators.required],
      password: [undefined, Validators.required]
    });
  }

}
