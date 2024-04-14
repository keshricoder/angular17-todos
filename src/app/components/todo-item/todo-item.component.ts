import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { TodoItem } from '../../models/todo-item';
import { UpdateTodoModalComponent } from '../update-todo-modal/update-todo-modal.component';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  updatedTitle: string | undefined;
  updatedDescription: string | undefined;
  
  constructor(
    private modalService: ModalService
  ) {}

  @Input() todo: TodoItem|any;
  @Output() toggle = new EventEmitter();
  @Output() remove = new EventEmitter();

  // @ViewChild("updateTodoModal") updateTodoModal: any;

  // ngAfterViewInit() {
  //   console.log(this.updateTodoModal); // Check if it's still undefined here
  // }

  openUpdateModal(todo: TodoItem) {
    this.modalService.openModal(todo);
  }

  // openUpdateModal(todo:TodoItem) {
  //   console.log(this.updateTodoModal);
  //   if (this.updateTodoModal) {
  //     this.updateTodoModal.show();
  //     // Populate the form fields with the todo item data
  //     this.updateTodoModal.updatedTitle = todo?.title;
  //     this.updateTodoModal.updatedDescription = todo?.description;
  //   }
  // }

  onToggle() {
    this.toggle.emit();
  }

  onRemove() {
    this.remove.emit();
  }

}
