import { Component, OnInit } from '@angular/core';
import { Todo } from 'app/models/todo';
import { TodoService } from 'app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})

export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoServices: TodoService) { }

  ngOnInit(): void {
    this.todoServices.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t.id !== todo.id);
    this.todoServices.deleteTodo(todo).subscribe(response => {
      console.log(response);
    });
  }
}
