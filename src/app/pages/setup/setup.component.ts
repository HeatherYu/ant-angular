import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';
import { UserService } from '../../services/user.service';
import {
  USERNAME,
  INIT_FLAG,
  START_USING_DATE
} from '../../services/local-storage/local-storage.namespace';
import { getTodayTime } from '../../utils/time';

// 倒计时
import { interval, from } from 'rxjs';

const secondsCounter = interval(1000);
secondsCounter.subscribe(n =>
  console.log(`It's been ${n} seconds since subscribing!`));


import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
// Return "response" from the API. If an error happens,
// return an empty array.

import { retry } from 'rxjs/operators';
const params = '/wecastsvr?functioncode=user_center_menu&user_id=52c3f1065f94ed491327cd88&team_id=26235843f9373aa65e6144a8b308d234cecc8463';
const apiData = ajax(params);

apiData.subscribe({
  next(x) { console.log('data: ', x); },
  error(err) { console.log('errors already caught... will not run'); }
});

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.less']
})
export class SetupComponent implements OnInit {
  username: string;
  color: 'grey';
  constructor(
    private store: LocalStorageService,
    private userService: UserService
  ) { }

  ngOnInit() {
    console.log(INIT_FLAG);
    this.userService.getUserInfo()
      // .pipe(
      //   retry(3), // retry a failed request up to 3 times
      //   catchError(this.handleError) // then handle the error
      // )
      .subscribe((data) => {
        console.log('看看你谁');
        console.log(data);
        console.log('看看你谁end');
      });
  }

  completeSetup(): void {
    this.store.set(INIT_FLAG, true);
    this.store.set(START_USING_DATE, getTodayTime());
    this.store.set(USERNAME, this.username);
    console.log(INIT_FLAG);
  }
}
