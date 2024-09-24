import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, effect } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.css'
})
export class ProgressComponent {
  tasks = this.taskService.getTasksByStatus('in-progress');

  constructor(private cdr: ChangeDetectorRef,private taskService: TaskService) {

    effect(() => {
      this.tasks = [...[],...this.taskService.getTasksByStatus('in-progress')]
      this.cdr.detectChanges(); 
    });

  }

  moveToCompleted(id: number) {
    this.taskService.moveTask(id, 'completed');
  }

  moveToPending(id: number) {
    this.taskService.moveTask(id, 'pending');
  }

}
