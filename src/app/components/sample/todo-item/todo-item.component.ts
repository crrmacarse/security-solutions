import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import Todo from 'app/models/todo-fix';
import { TodoService } from 'app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})

export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  onToggle = (todo: Todo) => {
    this.todoService.toggleCompleted(todo).subscribe(response => {
      console.log(response);
    });
    todo.completed = !todo.completed;
  }

  onDelete = (todo: Todo) => {
    this.deleteTodo.emit(todo);
  }

  setClasses = () => ({
    todo: true,
    'is-completed': this.todo.completed,
  })

}
