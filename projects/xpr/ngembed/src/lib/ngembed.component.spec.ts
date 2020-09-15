import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgembedComponent } from './ngembed.component';

describe('NgembedComponent', () => {
  let component: NgembedComponent;
  let fixture: ComponentFixture<NgembedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgembedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgembedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
