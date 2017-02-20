/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyTodoCompComponent } from './my-todo-comp.component';

describe('MyTodoCompComponent', () => {
  let component: MyTodoCompComponent;
  let fixture: ComponentFixture<MyTodoCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTodoCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTodoCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
