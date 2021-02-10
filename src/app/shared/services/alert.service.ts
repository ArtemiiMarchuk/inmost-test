import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {AlertInterface} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  public alert$ = new Subject<AlertInterface>();

  like(text: string): void {
    this.alert$.next({
      type: 'like',
      message: text
    });
  }

  dislike(text: string): void {
    this.alert$.next({
      type: 'dislike',
      message: text
    });
  }
}
