import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../../models/todo-item';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-todo-list',
    standalone: true,
    imports: [TodoItemComponent, CommonModule],
    templateUrl: './todo-list.component.html',
    styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {

  @Input() todos: TodoItem[] = [];
  @Output() toggleTodo = new EventEmitter<number>();
  @Output() removeTodo = new EventEmitter<number>();


}
