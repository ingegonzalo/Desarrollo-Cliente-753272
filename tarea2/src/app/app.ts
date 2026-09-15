import { Component, signal } from '@angular/core';

import { ListDetails } from './components/list-details/list-details';

@Component({
  selector: 'app-root',
  imports: [ListDetails],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('tarea2');
}
