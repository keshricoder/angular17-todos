import { Injectable } from '@angular/core';
import { TodoItem } from '../models/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: TodoItem[] = [
    { id: 1, title: 'Broadridge Interview', description: 'Monday 2PM will start interview', status: false },
    { id: 2, title: 'Pro5.ai Interview', description: 'Monday 3:30PM will start interview', status: false },
    { id: 3, title: 'Plan for Movie', description: 'After Interviews I will go for movie', status: false },
  ];

  constructor() { }

  getTodos(): TodoItem[] {
    return this.todos;
  }

  addTodo(todo: TodoItem): void {
    this.todos.push(todo);
  }

  toggleTodo(id: number): void {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.status = !todo.status;
    }
  }

  updateTodo(updatedTodo:TodoItem): void {
    const todoIndex = this.todos.findIndex(t => t.id === updatedTodo?.id);
    console.log(todoIndex)
    if (todoIndex !== -1) {
      this.todos[todoIndex].title = updatedTodo?.title;
      this.todos[todoIndex].description = updatedTodo?.description;
    }
  }

  removeTodo(id: number): void {
    this.todos = this.todos.filter(t => t.id !== id);
  }
}
