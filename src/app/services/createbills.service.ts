import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/observable';
import {User} from '../models/user.model'


@Injectable()
export class CreateBillsService {


  constructor(private http: HttpClient) { }

  loadData() {
    const url = 'assets/data/school.json';
    return this.http.get(url);
  }

}



