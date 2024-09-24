import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Task, TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { signal, effect } from '@angular/core';


@Component({
  selector: 'app-pendent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pendent.component.html',
  styleUrl: './pendent.component.css',
})
export class PendentComponent {

  

  tasks:Task[] = [] ;

  taskService = inject(TaskService)

  constructor( private cdr: ChangeDetectorRef) {

    effect(() => {
      this.tasks = [...[],...this.taskService.getTasksByStatus('pending')]
      this.cdr.detectChanges(); 
    });

  }


  moveToInProgress(id: number) {
    this.taskService.moveTask(id, 'in-progress');
  }

}
