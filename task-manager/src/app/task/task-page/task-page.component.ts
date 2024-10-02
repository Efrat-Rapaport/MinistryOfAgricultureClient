import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent {
  constructor(private router: Router) { } // ייבוא והגדרה של Router

  createNewTask() {
    console.log('Navigating to new-task');
    this.router.navigate(['/new-task']); // ניווט לעמוד יצירת המשימה
  }
}
