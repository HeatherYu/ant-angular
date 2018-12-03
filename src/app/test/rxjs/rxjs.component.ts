import { Component, OnInit } from '@angular/core';
import { Observable, interval, fromEvent } from 'rxjs';
import { take, map, filter } from 'rxjs/operators';
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() { }
  ngOnInit() {
    // interval
    const test = interval(1000);
    test.pipe(take(3)).subscribe(n =>
      console.log(` axjs 运行 ${n} seconds !`));
    this.elEvent();
  }
  elEvent() {
    const el = document.getElementById('my-ele');
    const mouseMoves = fromEvent(el, 'mousemove');
    const test2 = mouseMoves.subscribe((evt: MouseEvent) => {
      console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);
      if (evt.clientX < 40 && evt.clientY < 40) {
        test2.unsubscribe();
      }
    });
  }

}
