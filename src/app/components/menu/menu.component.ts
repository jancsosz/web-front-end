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

  constructor(
    private router: Router) { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
