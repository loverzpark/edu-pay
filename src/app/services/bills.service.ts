import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/observable';
import {User} from '../models/bills.model.'

@Injectable()
export class BillsService {


  constructor(private http: HttpClient) { }

  loadData() {
    const url = 'assets/data/invoice.json';
    return this.http.get(url);
  }

}
