import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitchCmpComponent } from './ng-switch-cmp.component';

describe('NgSwitchCmpComponent', () => {
  let component: NgSwitchCmpComponent;
  let fixture: ComponentFixture<NgSwitchCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSwitchCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSwitchCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
