import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/models/TaskModel';
import { TaskService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: TaskModel[] = [];
  includeArchived: boolean = false;
  page: number = 1;
  pageSize: number = 10;
  sortMode: string = 'multiple';
  defaultSortField: string = 'startDate';
  defaultSortOrder: number = 1;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.loadTaskList();
  }

  loadTaskList() {

    this.taskService.getTasksList().subscribe(succ => { this.tasks = succ });
  }


  toggleArchived(): void {
    this.includeArchived = !this.includeArchived;
    this.loadTaskList();
  }

  toggleCompleted(task: TaskModel) {
    // Toggle the completed flag (reverse it)
    task.completed = !task.completed;
  }

  editTask(taskId: number) {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      if (task.completed) {
        task.endDate = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
      } else {
        task.endDate = null;
      }
      this.taskService.putTask(task.id, task).subscribe(() => {
        this.loadTaskList();
      });
    }



  }


  deleteTask(taskId: number) {
    this.taskService.deleteTask(taskId).subscribe(succ => { this.loadTaskList() });
    console.log("delete task")
  }

  moveToArchiveTask(taskId: number) {
    const taskToArchive = this.tasks.find(t => t.id === taskId);

    if (taskToArchive) {
      const updatedTask: TaskModel = { ...taskToArchive, archived: true };
      this.taskService.putTask(taskId, updatedTask).subscribe(() => {
        this.loadTaskList();
      });
    }
  }

}
