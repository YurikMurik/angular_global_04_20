import { Component, OnInit } from '@angular/core';
import { LoadingBlockService } from 'src/app/core/services/loading-block.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loading-block',
  templateUrl: './loading-block.component.html',
  styleUrls: ['./loading-block.component.less']
})
export class LoadingBlockComponent implements OnInit {
  private subscription: Subscription;
  public loadingState: boolean;

  constructor (public loadingBlockService: LoadingBlockService) {}

  public ngOnInit(): void {
    this.subscription = this.loadingBlockService.stateLoadingBlockNotify.subscribe(
      data => this.loadingState = data
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
