import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TodolistService, TodoItem, TodoList,} from '../todolist.service';
import { async, BehaviorSubject, Observable, reduce } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {
  readonly obsTDL2 : Observable<TodoList>;
  // todoCount : number = 1;
  
  titre! : String;

  constructor(private TDLS : TodolistService) { 
    this.obsTDL2 = TDLS.observable;
  }

  ngOnInit(): void {
  }

  create(...labels: readonly string[]){
    this.TDLS.create(...labels);
  
  }
  delete(...items: readonly TodoItem[]){
    this.TDLS.delete(...items);
  }
 
  update(data: Partial<TodoItem>, ...items: readonly TodoItem[]){
    this.TDLS.update(data,...items);
    
  }

  trackById(n : number, item : TodoItem): number{
    return item.id;
  }
 

  count():number{
    let todoCount : number = 1;
    this.obsTDL2.subscribe(todolist =>
      todoCount = todolist.items.length
      );
      return todoCount;
  }

}
