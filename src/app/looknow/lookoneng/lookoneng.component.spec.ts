import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookonengComponent } from './lookoneng.component';

describe('LookonengComponent', () => {
  let component: LookonengComponent;
  let fixture: ComponentFixture<LookonengComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookonengComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookonengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
