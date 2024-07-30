import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css'],
})
export class ParentComponentComponent implements OnInit {
  name: string = '';
  parentData = "";

  constructor() {}

  ngOnInit(): void {}

  childData(eve: any): void {
    console.log('Result', eve);
  }


  sendData(eve:any):void{

    this.parentData=eve
  }

}
