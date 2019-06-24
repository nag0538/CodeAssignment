import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder
} from "@angular/forms";
import { EditorderComponent } from "./editorder/editorder.component";
import { AddorderComponent } from './addorder/addorder.component';
export interface Order {
  OrderNumber: number;
  OrderDueDate: Date;
  CustomerName: string;
  CustomerAdd: string;
  CustomerPhn: number;
  OrderTotal: number;
}

const Orders: Order[] = [
  {
    OrderNumber: 1,
    OrderDueDate: new Date(2019,8,12),
    CustomerName: "A",
    CustomerAdd: "Hyd",
    CustomerPhn: 1234567890,
    OrderTotal: 100
  },
  {
    OrderNumber: 2,
    OrderDueDate: new Date(),
    CustomerName: "A",
    CustomerAdd: "Hyd",
    CustomerPhn: 1234567890,
    OrderTotal: 100
  },
  {
    OrderNumber: 3,
    OrderDueDate: new Date(2019,1,1),
    CustomerName: "A",
    CustomerAdd: "Hyd",
    CustomerPhn: 1234567890,
    OrderTotal: 100
  },
  {
    OrderNumber: 4,
    OrderDueDate: new Date(2019,3,2),
    CustomerName: "A",
    CustomerAdd: "Hyd",
    CustomerPhn: 1234567890,
    OrderTotal: 100
  },
  {
    OrderNumber: 5,
    OrderDueDate: null,
    CustomerName: "A",
    CustomerAdd: "Hyd",
    CustomerPhn: 1234567890,
    OrderTotal: 100
  },
  {
    OrderNumber: 6,
    OrderDueDate: new Date(2019,8,24),
    CustomerName: "A",
    CustomerAdd: "Hyd",
    CustomerPhn: 1234567890,
    OrderTotal: 100
  },
  {
    OrderNumber: 7,
    OrderDueDate: new Date(2019,1,6),
    CustomerName: "A",
    CustomerAdd: "Hyd",
    CustomerPhn: 1234567890,
    OrderTotal: 100
  },
  {
    OrderNumber: 8,
    OrderDueDate: null,
    CustomerName: "A",
    CustomerAdd: "Hyd",
    CustomerPhn: 1234567890,
    OrderTotal: 100
  },
  {
    OrderNumber: 9,
    OrderDueDate: null,
    CustomerName: "A",
    CustomerAdd: "Hyd",
    CustomerPhn: 1234567890,
    OrderTotal: 100
  },
  {
    OrderNumber: 10,
    OrderDueDate: null,
    CustomerName: "A",
    CustomerAdd: "Hyd",
    CustomerPhn: 1234567890,
    OrderTotal: 100
  }
];

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.css"]
})
export class OrderComponent implements OnInit {
  constructor(private modalService: NgbModal, private fb: FormBuilder) {}
  orders = Orders;
  popUpmode: "Edit" | "Add";
  addform: FormGroup;

  editform: FormGroup;
  ngOnInit() {
    this.addform = this.fb.group({
      OrderDueDate: Date,
      CustomerName: null,
      CustomerAdd: null,
      CustomerPhn: null,
      OrderTotal: null
    });
    // edit form
    this.editform = this.fb.group({
      OrderDueDate: Date,
      CustomerName: null,
      CustomerAdd: null,
      CustomerPhn: null,
      OrderTotal: null
    });
  }
  editOrder(index: number) {
    const modalRef = this.modalService.open(EditorderComponent, { size: "lg" });
    modalRef.componentInstance.formData = this.orders[index];
    modalRef.result.then(res => {
      if (res != "cancel") {
        console.log(res);
        this.orders[index] = res;
      }
    });
   
  }
  addOrder() {
    const modalRef = this.modalService.open(AddorderComponent, { size: "lg" });
    modalRef.result.then(res => {
      if (res != "cancel") {
        console.log(res);
        res.OrderNumber=this.orders.length+1;
        this.orders.push(res);
      }
    });
  }
  deleteOrder(index: number) {
    this.orders.splice(index, 1);
  }
  updateOrder(data) {
    alert("saved");
  }
}
