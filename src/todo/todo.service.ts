import { Injectable } from '@nestjs/common';
import { Todo } from '../todo';

let todoId = 0;

@Injectable()
export class TodoService {

  add(todo: Todo): Todo {
    todo.id = todoId++;
    this.store.put(todo.id, todo);
    return todo;
  }

  public get(id: number): Todo {
    return this.store.get(id);
  }

  public getAll(): Todo[] {
    return Array.from(this.store.values());
  }

  delete(id: number): void {
    this.store.delete(id);
  }

  update(id: number, todo: Todo): void {
    this.store.set(id, todo);
  }

  private store: new Map<number, Todo>();

}
