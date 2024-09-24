import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, effect } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-completed',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.css'
})
export class CompletedComponent {
  tasks = this.taskService.getTasksByStatus('completed');

  constructor(private cdr: ChangeDetectorRef,private taskService: TaskService) {
    effect(() => {
      this.tasks = [...[],...this.taskService.getTasksByStatus('completed')]
      this.cdr.detectChanges(); 
    });


  }
}
