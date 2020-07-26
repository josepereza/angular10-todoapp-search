import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Todo } from '../models/Todo';



@Injectable({
  providedIn: 'root',
})
export class TodoService {
  url: string = "http://localhost:3000/tags/";
Options:any;
  constructor(private http: HttpClient) {
    const Options = {
      headers: new HttpHeaders({
        //Header for send
        'Content-Type': 'aplication/json',
      }),
    };
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }

  deleteTodo(todo: Todo): Observable<any> {
    const url = `${this.url}/${todo.id}`;
    return this.http.delete<any>(url, this.Options);
  }

  addTodo(todo: Todo): Observable<any> {
    return this.http.post<any>(this.url, todo, this.Options);
  }

  toggleCompleted(todo: Todo): Observable<any> {
    const urlEl = `${this.url}/${todo.id}`;

    return this.http.put<any>(this.url + todo.id, todo, this.Options);
  }

  find(id): Observable<Todo> {
    return this.http.get<Todo>(this.url+ id)
    
  }
  update(id, todo): Observable<any> {
    return this.http.put<any>(this.url + id, todo, this.Options);
   
  }
  

}
