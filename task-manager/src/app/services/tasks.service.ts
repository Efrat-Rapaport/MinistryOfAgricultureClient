import { Injectable } from "@angular/core";
import { TaskModel } from "../models/TaskModel";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TaskService {


    constructor(private http: HttpClient) { }

    getTasksList(): Observable<TaskModel[]> {

        return this.http.get<TaskModel[]>("http://localhost:5049/api/Task");

    }

    deleteTask(taskId: number): Observable<any> {
        return this.http.delete<any>("http://localhost:5049/api/Task/" + taskId);
    }

    postTask(newTask: TaskModel): Observable<any> {
        console.log(newTask)
        return this.http.post<any>("http://localhost:5049/api/Task", newTask);
    }

    putTask(taskId: number, updateTask: TaskModel): Observable<any> {
        console.log(updateTask)
        return this.http.put<any>("http://localhost:5049/api/Task/" + taskId, updateTask);
    }


}