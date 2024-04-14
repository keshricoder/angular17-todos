import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoItem } from '../../models/todo-item';
import { TodoService } from '../../services/todo.service';
import { ModalService } from '../../services/modal.service';

declare var $: any; // Declare jQuery

@Component({
  selector: 'app-update-todo-modal',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-todo-modal.component.html',
  styleUrl: './update-todo-modal.component.scss'
})
export class UpdateTodoModalComponent {

  // private static ID = "updateTodoModal";
  @Input()
  public todo: TodoItem |any;

  public updatedTitle: string ='';
  public updatedDescription: string = '';

  constructor(
    private modalService: ModalService,
    private todoService: TodoService
  ) {}

  ngOnInit() {
    console.log("init called ", this.todo);
    this.modalService.getTodoItem().subscribe(todo => {
      this.todo = todo;
    });
  }

  updateTodo() {
    this.todo.title = this.updatedTitle;
    this.todo.description = this.updatedDescription;
    console.log(this.todo);
    this.todoService.updateTodo(this.todo);
    $("#updateTodoModal").modal('hide');
  }

}