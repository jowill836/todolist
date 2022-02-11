import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodolistService, TodoItem,} from './todolist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'l3m-tpX-todolist-angular-y2022';

  constructor(private TDLS : TodolistService){
    
    
  }

  get obs(){
    return this.TDLS.observable;
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


}
