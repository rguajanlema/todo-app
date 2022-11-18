import { Component, Input, OnInit } from '@angular/core';
import { TodoModel } from 'src/app/providers/todos.states';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo?: TodoModel;
  editTodo: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.editTodo = this.todo!.completed;
  }

  updateToggle() {
    this.editTodo = !this.editTodo;
  }
  updateTodo() {}
  deleteTodo() {}
}
