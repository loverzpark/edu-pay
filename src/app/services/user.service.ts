import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/observable';
import {User} from '../models/user.model'

@Injectable()
export class UserService {


  constructor(private http: HttpClient) { }

  loadData() {
    const url = 'assets/data/users.json';
    return this.http.get(url);
  }

}
