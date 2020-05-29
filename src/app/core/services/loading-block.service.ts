import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoadingBlockService {
  private notificationSource: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public stateLoadingBlockNotify: Observable<boolean> = this.notificationSource.asObservable();

  public updateLoadingBlockState(newState: boolean): void {
    this.notificationSource.next(newState);
  }
}
