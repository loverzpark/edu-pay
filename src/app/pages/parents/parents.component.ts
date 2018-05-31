import { Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Observable} from 'rxjs/observable';
import {User} from '../../models/user.model';
import { Subject } from 'rxjs/Subject';




/**
 * @title Basic table
 */
@Component({
  selector: 'app-parents',
  styleUrls: ['parents.component.scss'],
  templateUrl: 'parents.component.html',
})
export class ParentsComponent implements OnInit {
 Allstatus: any = [];
 dtOptions: DataTables.Settings = {};

 dtTrigger: Subject<any> = new Subject();
 constructor(private userService: UserService ) {

 }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.userService.loadData().subscribe(  result => {
      this.Allstatus = result;

      this.dtTrigger.next();
    });
  }
}

