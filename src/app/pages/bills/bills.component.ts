import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {BillsService} from '../../services/bills.service';
import {Observable} from 'rxjs/observable';
import {User} from '../../models/bills.model.';
import { Subject } from 'rxjs/Subject';
import { routing } from '../pages.routing';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BillsComponent implements OnInit {
  router: Router;
  Allstatus: any = [];
  dtOptions: DataTables.Settings = {};

  dtTrigger: Subject<any> = new Subject();
  constructor(private billsService: BillsService, router: Router ) {
    this.router = router;
  }

   ngOnInit(): void {
     this.dtOptions = {
       pagingType: 'full_numbers',
       pageLength: 10
     };

     this.billsService.loadData().subscribe(  result => {
       this.Allstatus = result;

       this.dtTrigger.next();
     });
   }
 }

 export class NgbdModalOptions {
  closeResult: string;

  constructor(private modalService: NgbModal) {}


  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }


}
