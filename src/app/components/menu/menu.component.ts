import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menu: any;
  innerWidth: number;
  isLoggedIn: boolean;
  username = '';

  constructor(
    private router: Router) { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.isLoggedIn = !!window.localStorage.getItem('username');
    this.isLoggedIn ? this.username = window.localStorage.getItem('username') : this.username = '';
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }

  logOut(): void {
    window.localStorage.removeItem('username');
    window.localStorage.removeItem('token');
    this.isLoggedIn = false;
    this.navigateTo('home');
  }
}
