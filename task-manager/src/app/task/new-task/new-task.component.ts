import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskModel } from 'src/app/models/TaskModel';
import { TaskService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  taskForm: FormGroup;

  taskTypeOptions = [
    { label: 'אישי', value: 'personal' },
    { label: 'עבודה', value: 'work' },
    { label: 'לימודים', value: 'study' }
  ];

  constructor(private fb: FormBuilder, private router: Router, private taskService: TaskService) {
    this.taskForm = this.fb.group({
      name: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: [''],
      taskType: ['', Validators.required],
      isRecurring: [false],
      description: ['', Validators.required],
      archived: [false]
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    if (this.taskForm.valid) {
      // Convert dates to string format before sending
      const formValue = {
        ...this.taskForm.value,
        id: 0,
        completed: false,
        startDate: this.taskForm.value.startDate ? new Date(this.taskForm.value.startDate).toISOString() : null,
        endDate: this.taskForm.value.endDate ? new Date(this.taskForm.value.endDate).toISOString() : null,
      };

      const newTask: TaskModel = new TaskModel(formValue);
      console.log(newTask);
      this.taskService.postTask(newTask).subscribe(() => {
        this.router.navigate(['']);
      });
    }
  }

  goBack() {
    this.router.navigate(['']); // Change this to your appropriate route
  }
}
