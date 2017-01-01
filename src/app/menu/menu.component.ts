import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private routes: Routes = [];

  constructor() {
    this.routes = environment.routes;
  }

  ngOnInit() { }
}
