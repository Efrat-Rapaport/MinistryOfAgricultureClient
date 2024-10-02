import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskPageComponent } from './task-page/task-page.component';
import { PrimengModule } from '../primeng/primeng.module';
import { ReactiveFormsModule } from '@angular/forms'; // ייבוא של ReactiveFormsModule



@NgModule({
  declarations: [
    NewTaskComponent,
    TaskListComponent,
    TaskPageComponent
  ],
  imports: [
    CommonModule, PrimengModule, ReactiveFormsModule
  ],
  exports: [NewTaskComponent,
    TaskListComponent,
    TaskPageComponent]

})
export class TaskModule { }
