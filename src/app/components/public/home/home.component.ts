import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  title:string = "Hello World"
  constructor() { }

  ngOnInit(): void {
  }

  changeTitle(title: string): void {
    this.title = title;
  }
}
