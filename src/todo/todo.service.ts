import { Injectable } from '@nestjs/common';
import { Todo } from '../todo';

let todoId = 0;

@Injectable()
export class TodoService {

  private store: Map<number, Todo> = new Map<number, Todo>();

  add(todo: Todo): Todo {
    todo.id = todoId++;
    this.store.set(todo.id, todo);
    return todo;
  }

  get(id: number): Todo {
    return this.store.get(id);
  }

  getAll(): Todo[] {
    return Array.from(this.store.values());
  }

  delete(id: number): void {
    this.store.delete(id);
  }

  update(id: number, todo: Todo): void {
    this.store.set(id, todo);
  }

}
