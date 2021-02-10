import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AlertType} from '../../interfaces';
import {AlertService} from '../../services/alert.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {

  @Input() delay = 1500;

  public message: string;
  public type: AlertType;

  aSub: Subscription;

  constructor(
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.alertService.alert$.subscribe(alert => {
      this.message = alert.message;
      this.type = alert.type;

      const timeout = setTimeout(() => {
        clearTimeout(timeout);
        this.message = '';
      }, this.delay);
    });
  }

  ngOnDestroy(): void {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }

}
