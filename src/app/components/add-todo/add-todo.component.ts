import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent {

  public newTodoTitle: string = '';
  public newTodoDesc: string = '';

  @Output() add = new EventEmitter<{ title: string, description: string }>();

  addTodo() {
    if (this.newTodoTitle.trim().length && this.newTodoDesc.trim().length) {
      this.add.emit({ title: this.newTodoTitle, description: this.newTodoDesc });
      this.newTodoTitle = '';
      this.newTodoDesc = '';  // Clear the description input field as well
      alert("Task Added Successfully")
    }
  }
}

// export default AddTodoComponent; 