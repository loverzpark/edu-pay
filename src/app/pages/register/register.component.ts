import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import {  CreateBillsService } from '../../services/createbills.service';
import { Subject } from 'rxjs/Subject';
import { Location } from '@angular/common';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
    public router: Router;
    public form: FormGroup;
    public fieldArray: Array<any> = [];
    public newAttribute: any = {};
    Allstatus: any = [];
  dtOptions: DataTables.Settings = {};
  cost = '';
  qty = '';

  dtTrigger: Subject<any> = new Subject();
  constructor(private createbills: CreateBillsService, router: Router, private location: Location ) {
    this.router = router;
  }

  goBack() {
    this.location.back(); // <-- go back to previous location on cancel
  }

   ngOnInit(): void {

     this.createbills.loadData().subscribe(  result => {
       this.Allstatus = result;

       this.dtTrigger.next();
     });
    }

    addFieldValue() {
      this.fieldArray.push(this.newAttribute)
      this.newAttribute = {};
  }

  deleteFieldValue(index) {
      this.fieldArray.splice(index, 1);
  }
}


