import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  public route: string;

  constructor(location: Location, router: Router) {
    router.events.subscribe(val => {
      if (location.path() !== '') {
        this.route = location.path();
      } else {
        this.route = '/';
      }
    });
  }

  public ngOnInit(): void {
    localStorage.clear();
  }
}
