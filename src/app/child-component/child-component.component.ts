import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
})
export class ChildComponentComponent implements OnInit {



  @Output()  data =new EventEmitter<string>()

  @Output()  myData =new EventEmitter<string>()
  constructor() {}

  ngOnInit(): void {

    this.data.emit("Child Data")
  }


  btnClick(){
  this.myData.emit('this data is from child')
  }


  sendData(){

  }

}
