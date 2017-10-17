import { Component } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userExists = null;
  score = null;
  username = null;
  promise;

  constructor(private _taskService: TaskService) {}

  calculateScore() {
    this.promise = this._taskService.retrieveTasks(this.username);
    if (this.promise) {
      this.promise.then( (user) => {
        if (user.id) {
          this.userExists = true;
          this.score = user.public_repos + user.followers;
        } else {
          this.userExists = false;
          this.score = null;
        }
        this.username = null;
        console.log(this.username);
      })
      .catch( (err) => {
        this.userExists = false;
      });
    } else {
      this.userExists = false;
    }
  }
}
