import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { TaskService } from './services/task.service';

export const appConfig: ApplicationConfig = {
  providers: [TaskService,provideRouter(routes)]
};
