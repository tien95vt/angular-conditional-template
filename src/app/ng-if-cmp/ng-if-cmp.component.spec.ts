import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfCmpComponent } from './ng-if-cmp.component';

describe('NgIfCmpComponent', () => {
  let component: NgIfCmpComponent;
  let fixture: ComponentFixture<NgIfCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIfCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
