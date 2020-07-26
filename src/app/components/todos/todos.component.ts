import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Router } from '@angular/router';



import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todo: Todo[];
  mitodo:Todo[];
 
  constructor(private todoService: TodoService, private router: Router) {}

  ngOnInit() {
    this.todos();
  

  }
  deleteTodo(todo: Todo) {
    // Remove From UI
    this.todo = this.todo.filter((t) => t.id !== todo.id);
    // Remove from server
    this.todoService.deleteTodo(todo).subscribe();
    this.todos();
  }
  addTodo(todo: Todo) {
    console.log(todo);

    this.todoService.addTodo(todo).subscribe((el) => {
      this.todo.push(todo);
      this.todos();
    });
  }
  todos(){
    this.todoService.getTodos().subscribe((todo) => {
      this.todo = todo;
      this.mitodo=todo;
      
    });
   
  }
  filterTodo(mifilter:any){
    
    console.log(' este es ',mifilter);
 
  this.mitodo=this.todo.filter(option => option.title.toLowerCase().includes(mifilter));
  console.log(this.mitodo)
  }
  
}
