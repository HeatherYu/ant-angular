import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookoneComponent } from './lookone.component';

describe('LookoneComponent', () => {
  let component: LookoneComponent;
  let fixture: ComponentFixture<LookoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
