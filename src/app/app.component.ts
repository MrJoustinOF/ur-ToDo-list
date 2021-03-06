import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ur-ToDo-list';

  tasks = [];

  handleMenu() {
    const menu = document.querySelector('.mobile-menu');
    menu.classList.toggle('hidden');
  }

  addTask() {
    const task = document.querySelector('input');
    this.tasks.push(task.value);
  }

  deleteTask(task) {
    const position = this.tasks.indexOf(task);

    if (position !== -1) {
      this.tasks.splice(position, 1);
    }
  }
}
