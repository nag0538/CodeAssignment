import { Component, OnInit, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder
} from "@angular/forms";
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Order } from '../order.component';

@Component({
  selector: 'app-editorder',
  templateUrl: './editorder.component.html',
  styleUrls: ['./editorder.component.css']
})
export class EditorderComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal,private fb: FormBuilder) { }

  editform: FormGroup;
  @Input() formData:Order ;
  ngOnInit() {

    // edit form
    this.editform = this.fb.group({
      OrderNumber: this.formData.OrderNumber,
      OrderDueDate:{ year: this.formData.OrderDueDate.getFullYear(), month: this.formData.OrderDueDate.getMonth()+1, day: this.formData.OrderDueDate.getDate()} ,
      CustomerName: this.formData.CustomerName,
      CustomerAdd: this.formData.CustomerAdd,
      CustomerPhn: this.formData.CustomerPhn,
      OrderTotal: this.formData.OrderTotal
    });
  }
  updateOrder(data) {
    console.log(data);
    data.OrderDueDate=new Date( data.OrderDueDate.year, data.OrderDueDate.month-1, data.OrderDueDate.day);
    this.activeModal.close(data);
  }

}
