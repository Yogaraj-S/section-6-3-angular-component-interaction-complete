import { Component, OnInit } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // We get the below data from API
  tasksList: Task[] = [
    {
      id: 1,
      taskName: 'Create a component',
      creator: 'Yogi',
      assignee: 'Siddharth',
      status: 'Active',
      details: 'You have to create a parent and child component in angular 8.'
    }
  ];
  taskSelected: Task = {
    id: 2,
    taskName: 'Create a directive',
    creator: 'Rahul',
    assignee: 'Ponvel',
    status: 'Active',
    details: 'You have to create a directive in angular 8.'
  };

  constructor() {
  }

  ngOnInit() {
  }

  selectedTaskData = (task) => {
    console.log('home component...', task);
    this.taskSelected = task[0];
  }

}
