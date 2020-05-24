import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { LoadingBlockService } from '../core/services/loading-block.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  public route: string;
  public loadingState: boolean = false;

  constructor(
    public location: Location,
    private router: Router,
    public loadingBlockService: LoadingBlockService,
    private cdref: ChangeDetectorRef
  ) {
    router.events.subscribe(val => {
      if (location.path() !== '') {
        this.route = location.path();
      } else {
        this.route = '/';
      }
    });
  }

  public ngOnInit(): void {
    this.loadingBlockService.stateLoadingBlockNotify.subscribe(
      state => {
        this.loadingState = state;
        this.cdref.detectChanges();
      }
    );
  }
}
