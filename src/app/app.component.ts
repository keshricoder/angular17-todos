import { Component } from '@angular/core';
import { TodoItem } from './models/todo-item';
import { TodoService } from './services/todo.service';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { FormsModule } from '@angular/forms';
import { UpdateTodoModalComponent } from "./components/update-todo-modal/update-todo-modal.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [FormsModule, TodoListComponent, AddTodoComponent, UpdateTodoModalComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'todo-app';

  todos: TodoItem[];

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getTodos();
  }

  handleAdd(todoData: { title: string, description: string }): void {
    const newTodo: TodoItem = {
      id: Date.now(),  // Assuming you have an ID in your model
      title: todoData.title,
      description: todoData.description,  // Make sure your TodoItem model supports a 'description' property
      status: false
    };
    this.todoService.addTodo(newTodo);
    this.todos = this.todoService.getTodos(); // Refresh the list
  }

  handleToggle(id: number): void {
    this.todoService.toggleTodo(id);
    this.todos = this.todoService.getTodos(); // refresh the list
  }

  handleRemove(id: number): void {
    this.todoService.removeTodo(id);
    this.todos = this.todoService.getTodos(); // refresh the list
  }

}
