import { BookmarkModule } from '../../models/bookmark/bookmark.module';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bookmark-preview',
  templateUrl: './bookmark-preview.component.html',
  styleUrls: ['./bookmark-preview.component.scss']
})
export class BookmarkPreviewComponent implements OnInit {

  constructor() { }

  @Input() bookmarks!:BookmarkModule[]|null
  @Input() isClose!:boolean

  ngOnInit(): void {
   
    
  }

}
