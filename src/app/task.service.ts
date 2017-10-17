import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; // <— Imported
import { Observable } from 'rxjs/Observable'; // <- gave error is only import rxjs
import 'rxjs/add/operator/map'; // <- add map function
import 'rxjs/add/operator/toPromise'; // <- add toPromise function

@Injectable()
export class TaskService {

  constructor(private _http: Http) { }

  retrieveTasks(username) {
    if (username) {
      return this._http.get(`https://api.github.com/users/${username}`)
      .map( data => data.json() ) // <- Apply projection with each value from source.
      .toPromise(); // <- convert observable to promise
    }
  }
}
