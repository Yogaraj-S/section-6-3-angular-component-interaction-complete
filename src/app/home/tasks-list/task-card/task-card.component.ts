import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../task';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

  @Input() task: Task;
  @Output() getSelectedTaskFromCard: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  getSelectedTask = (task) => {
    console.log('taskcard', task);
    this.getSelectedTaskFromCard.emit(task);
  }

}
