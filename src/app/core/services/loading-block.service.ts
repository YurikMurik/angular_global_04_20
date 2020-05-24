import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoadingBlockService {
  private notificationSource: Subject<boolean> = new Subject();
  public initialState: boolean = true;
  public stateLoadingBlockNotify: Observable<boolean> = this.notificationSource.asObservable();

  public updateLoadingBlockState(newState: string): void {
    this.notificationSource.next(this.initialState);
    if (newState === 'start') {
      this.notificationSource.next(true);
    } else {
      this.notificationSource.next(false);
    }
  }
}
