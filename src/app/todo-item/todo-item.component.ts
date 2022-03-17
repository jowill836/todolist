import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Observable } from 'rxjs';
import { TodolistService, TodoItem, TodoList } from '../todolist.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemComponent implements OnInit {
  readonly obsTDL: Observable<TodoList>;
  @Input() data!: TodoItem;
  @Output() update = new EventEmitter<Partial<TodoItem>>();
  @Output() remove = new EventEmitter<TodoItem>();

  constructor(private TDLS: TodolistService) {
    this.obsTDL = TDLS.observable;
  }

  ngOnInit(): void {}

  // UPDATE(d: Partial<TodoItem>): void {
  //   this.update.emit(d);
  // }
  UPDATE(data: Partial<TodoItem>, ...items: readonly TodoItem[]){
    this.TDLS.update(data,...items);
    
  }

  REMOVE(d: TodoItem): void {
    this.remove.emit(d);
  }
}
