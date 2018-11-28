import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Router, NavigationStart } from '@angular/router';

import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  navStart: Observable<NavigationStart>;
  you = {
    name: 'ff'
  };
  nameChangeLog: string[] = [];
  heroForm: FormGroup;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { 
    this.navStart = router.events.pipe(
      filter(evt => evt instanceof NavigationStart)
    ) as Observable<NavigationStart>;
  }

  // time = new Observable(observer =>
  //   setInterval( () => observer.next(new Date().toString()), 1000)
  // );

  ngOnInit() {
    this.heroForm = new FormGroup({
      'name': new FormControl(this.you.name),
    });
    this.logNameChange();
    this.activatedRoute.url
    .subscribe(url => console.log('The URL changed to: ' + url  + new Date()));
    this.navStart.subscribe(evt => console.log('Navigation Started!' + new Date()));
  }
  logNameChange() {
    const nameControl = this.heroForm.get('name');
    nameControl.valueChanges.forEach(
      (value: string) => this.nameChangeLog.push(value)
    );
    console.log(this.nameChangeLog);
  }

}
