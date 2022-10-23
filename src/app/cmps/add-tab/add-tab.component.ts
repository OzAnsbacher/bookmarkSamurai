import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-tab',
  templateUrl: './add-tab.component.html',
  styleUrls: ['./add-tab.component.scss']
})
export class AddTabComponent implements OnInit {

  constructor() { }

  isOpen:boolean=true
  isClick:boolean=true
  ngOnInit(): void {
  }

  closeSlow(){
    this.isOpen=!this.isOpen
  }

}
