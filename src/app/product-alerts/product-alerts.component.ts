import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
@Input() product=15;
p=55;
@Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  notifypere(){
    this.notify.emit(this.p);
    console.log(this.p)
  }

}