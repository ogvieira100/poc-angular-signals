import { effect, Injectable, signal } from '@angular/core';

export interface Task {
  id: number;
  title: string;
  status: 'pending' | 'in-progress' | 'completed';
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksSignal = signal<Task[]>([]);
  private nextId = 1;

  constructor(){

    effect(() => {
     console.log( JSON.stringify(this.tasksSignal()));
    });
  }

  addTask(title: string) {
    const newTask: Task = { id: this.nextId++, title, status: 'pending' };
    this.tasksSignal.set([...[],...this.tasksSignal(), newTask]);
  }

  getTasks() {
    return this.tasksSignal();
  }

  moveTask(id: number, newStatus: Task['status']) {
    const updatedTasks = this.tasksSignal().map(task => {
      if (task.id === id) {
        return { ...task, status: newStatus };
      }
      return task;
    });
    this.tasksSignal.set(updatedTasks);
  }

  getTasksByStatus(status: Task['status']) {
    return this.tasksSignal().filter(task => task.status === status);
  }
}
