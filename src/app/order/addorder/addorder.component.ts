import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.css']
})
export class AddorderComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal,private fb: FormBuilder) { }

  addform: FormGroup;
  
  ngOnInit() {

    // edit form
    this.addform = this.fb.group({
      OrderNumber: null,
      OrderDueDate:null,
      CustomerName: null,
      CustomerAdd: null,
      CustomerPhn: null,
      OrderTotal:null
    });
  }
  saveOrder(data) {
    console.log(data);
    data.OrderDueDate=new Date( data.OrderDueDate.year, data.OrderDueDate.month-1, data.OrderDueDate.day);
    this.activeModal.close(data);
  }

}
