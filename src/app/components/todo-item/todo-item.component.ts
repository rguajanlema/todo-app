import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { actions } from 'src/app/providers/todos.actions';
import { TodoModel } from 'src/app/providers/todos.states';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo?: TodoModel;
  editTodo: boolean = false;
  completeTodo: boolean = false;
  todoInput?: string;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.completeTodo = this.todo!.completed;
    this.todoInput = this.todo!.title;
  }

  updateToggle() {
    this.editTodo = !this.editTodo;
  }
  updateTodo() {
    this.editTodo = !this.editTodo;
    if (this.todoInput!.trim().length > 0)
      this.store.dispatch(
        actions.updateTodoAction({
          id: this.todo!.id,
          completed: this.todo!.completed,
          title: this.todoInput!.trim(),
        })
      );
    else {
      this.todoInput = this.todo!.title;
    }
  }
  completeToggle() {
    this.completeTodo = !this.completeTodo;
    this.store.dispatch(
      actions.updateTodoAction({
        id: this.todo!.id,
        completed: this.completeTodo,
        title: this.todo!.title,
      })
    );
  }
  deleteTodo() {
    this.editTodo = !this.editTodo;
    this.store.dispatch(
      actions.deleteTodoAction({
        id: this.todo!.id,
        completed: this.todo!.completed,
        title: this.todo!.title,
      })
    );
  }
}
