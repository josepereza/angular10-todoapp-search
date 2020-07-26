import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Output() filterTodo: EventEmitter<any> = new EventEmitter();
  myControl = new FormControl();

  filteredOptions: any;
  constructor() { }

  ngOnInit(): void {
    this.myControl.valueChanges.subscribe(x => {
      this.mifilter(x)
    })

  }

  private mifilter(value: string): any {
    console.log(value);
    const filterValue = value.toLowerCase();
    console.log(filterValue);
    this.filterTodo.emit(filterValue);
  }
}
