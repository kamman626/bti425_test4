import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css']
})
export class ComponentOneComponent implements OnInit {
  public x:number
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.x=1;
  }

}
