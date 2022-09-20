import { CategoryModule } from './../../models/category/category.module';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bookmark-preview',
  templateUrl: './bookmark-preview.component.html',
  styleUrls: ['./bookmark-preview.component.scss']
})
export class BookmarkPreviewComponent implements OnInit {

  constructor() { }

  @Input() category!:CategoryModule|null

  ngOnInit(): void {
  }

}
