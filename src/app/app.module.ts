import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TaskDetailComponent } from './home/task-detail/task-detail.component';
import { TasksListComponent } from './home/tasks-list/tasks-list.component';
import { TaskCardComponent } from './home/tasks-list/task-card/task-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TaskDetailComponent,
    TasksListComponent,
    TaskCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
