import { TestBed, async } from '@angular/core/testing';
import {Todo} from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should accept values in the ctor', async(() => {
    const todo = new Todo({ id: 99, title: 'Go shopping', complete: true });
    expect(todo.id).toEqual(99);
    expect(todo.title).toEqual('Go shopping');
    expect(todo.complete).toEqual(true);
  }));
});
