import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app'; // Змінили App на AppComponent

bootstrapApplication(AppComponent, appConfig) // Змінили App на AppComponent
  .catch((err) => console.error(err));