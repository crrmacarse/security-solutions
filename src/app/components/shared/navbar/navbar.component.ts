import { Component, OnInit } from '@angular/core';
// import * as ROUTES from 'app/constants/routes';
// import camelCase from 'lodash/camelCase';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

// @TODO: Passing the ROUTES to html
export class NavbarComponent implements OnInit {
  title: string;
  // routeLinks: {};

  constructor() { }

  ngOnInit(): void {
    // this.routeLinks = Object.values(ROUTES).filter(v => !!v).reduce((acc, curr) => {
    //   const key = camelCase(curr)
    //   acc[key] = curr;

    //   return acc
    // }, {});
    this.title = 'Security Solutions Company';
  }
}
