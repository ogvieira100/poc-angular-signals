import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task, TaskService } from './services/task.service';
import { CompletedComponent } from './components/completed/completed.component';
import { PendentComponent } from './components/pendent/pendent.component';
import { ProgressComponent } from './components/progress/progress.component';
import { FormControl, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,CompletedComponent,PendentComponent,ProgressComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  newTaskTitle: string = '';
  tasks:Task[] = [];

  constructor(private taskService: TaskService, private cdr: ChangeDetectorRef) {}

  addTask() {
    if (this.newTaskTitle.trim()) {
      this.taskService.addTask(this.newTaskTitle);
      this.cdr.detectChanges(); // Forçar detecção de mudanças
      this.newTaskTitle = '';
      this.tasks =  this.taskService.getTasks()
    }
  }
}
