// // Assuming these are the correct imports for your AppModule or relevant module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { routes } from './app.routes'; // Ensure routes are properly configured
import { CommonModule } from '@angular/common';
// import { AppComponent } from './app.component';
// import { TodoListComponent } from './components/todo-list/todo-list.component';
// import {AddTodoComponent} from './components/add-todo/add-todo.component';
// import { TodoItemComponent } from './components/todo-item/todo-item.component';
// import {UpdateTodoModalComponent} from './components/update-todo-modal/update-todo-modal.component';

@NgModule({
  declarations: [
    // TodoListComponent,
    // AddTodoComponent,
    // TodoItemComponent,
    // UpdateTodoModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {}
