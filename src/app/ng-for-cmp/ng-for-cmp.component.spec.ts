import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForCmpComponent } from './ng-for-cmp.component';

describe('NgForCmpComponent', () => {
  let component: NgForCmpComponent;
  let fixture: ComponentFixture<NgForCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgForCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
