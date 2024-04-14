import { Injectable } from '@angular/core';
import { TodoItem } from '../models/todo-item';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }
  private showModal = new BehaviorSubject<boolean>(false);
  private todoItem = new BehaviorSubject<TodoItem | null>(null);

  openModal(todo: TodoItem) {
    console.log("called")
    this.showModal.next(true);
    this.todoItem.next(todo);
  }

  closeModal() {
    this.showModal.next(false);
    this.todoItem.next(null);
  }

  getShowModal() {
    return this.showModal.asObservable();
  }

  getTodoItem() {
    return this.todoItem.asObservable();
  }
}
