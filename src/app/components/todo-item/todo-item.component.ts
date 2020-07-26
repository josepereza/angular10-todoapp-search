import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Router,ActivatedRoute } from '@angular/router';

import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() element: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
   chequeo:boolean=false;
  constructor(private todoService: TodoService, private router:Router) {}

  ngOnInit(): void {}

  

  onToggle(element: Todo) {
    // Toggle in UI
    console.log(element)
    element.completed = !element.completed;
  console.log('mi togle ' + element);
    // Toggle on server
    this.todoService.update(element.id, element).subscribe((element) => {
      return console.log(element);
    });
  }

  onDelete(element: Todo) {
    this.deleteTodo.emit(element);
  }
  editar(id){
    console.log('este es el id ', id);
    this.router.navigate(['edit', id])
      }
 
}
