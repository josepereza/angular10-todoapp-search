import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import { Todo } from '../../models/Todo';

import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  id: any;
  tag: Todo;
  form: FormGroup;

  constructor(private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      console.log('ya estoz')
      this.id = this.route.snapshot.paramMap.get('postId');
      console.log('este parametro es ', this.id)
      this.todoService.find(this.id).subscribe((data: Todo)=>{
        this.tag = data;
        this.form.patchValue({
          title:data.title,
          completed:data.completed
         
        })
      });
      
      this.form = new FormGroup({
        title: new FormControl('', [Validators.required]),
        completed: new FormControl('')
      });
    }
     
    get f(){
      return this.form.controls;
    }
       
    submit(){
      console.log(this.form.value);
      this.todoService.update(this.id, this.form.value).subscribe(res => {
           console.log('Post updated successfully!');
           this.router.navigateByUrl('/');
      })
    }

}
