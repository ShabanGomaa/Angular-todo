import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ITodo } from '../interfaces/itodo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  reactiveFormGroup!: FormGroup;
  txt_name: string = "";;
  txt_details: string = "";

  todoList: ITodo[] = [];

  constructor(
    private formBuilder: FormBuilder,
  ) {

  }

  ngOnInit() {
    this.reactiveFormGroup = this.formBuilder.group({
      txt_name: [''],
      txt_details: [''],
    });
  }


  onSubmit() {
    let item: ITodo = {
      id: this.todoList.length + 1,
      name: this.reactiveFormGroup.value.txt_name,
      details: this.reactiveFormGroup.value.txt_details,
    }

    this.todoList.push(item);
  }

  deleteItem(id: number) {
    this.todoList = this.todoList.filter(t => t.id != id);
  }

}
