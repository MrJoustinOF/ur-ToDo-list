import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

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
