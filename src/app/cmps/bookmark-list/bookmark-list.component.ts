import { CategoryModule } from './../../models/category/category.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.scss']
})
export class BookmarkListComponent implements OnInit {

  constructor() { }
  categories:object={
    famely:[
      {
        id:'a1',
        url:'google.com',
        name:'Google',
      },
      {
        id:'a2',
        url:'youtube.com',
        name:'youtube',
      }
    ],
    hobby:[
      {
        id:'a1',
        url:'google.com',
        name:'Google',
      },
      {
        id:'a2',
        url:'youtube.com',
        name:'youtube',
      }
    ]
  }
 


  ngOnInit(): void {
  }

}
