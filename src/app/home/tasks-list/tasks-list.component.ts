import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {

  @Input() tasks: Task;
  @Output() getSelectedTaskFromList: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  selectedTask = (task) => {
    console.log('tasklist', task);
    this.getSelectedTaskFromList.emit(task);
  }

}
