import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task/task-list/task-list.component'; // ודא שהנתיב נכון
import { NewTaskComponent } from './task/new-task/new-task.component';
import { TaskPageComponent } from './task/task-page/task-page.component';

const routes: Routes = [
  { path: 'new-task', component: NewTaskComponent },
  { path: '', component: TaskPageComponent }, // דף הבית מפנה לרשימת המשימות
  { path: '**', redirectTo: '/task-list' } // כל נתיב לא קיים מפנה לרשימת המשימות
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
