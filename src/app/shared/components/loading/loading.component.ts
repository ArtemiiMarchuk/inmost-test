import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `<img src="assets/img/loading.gif" alt="loading icon">`,
  styles: [`
    img {
      position: absolute;
      top: calc(50vh - 32px);
      left: calc(50vw - 32px);
    }
  `]
})
export class LoadingComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
