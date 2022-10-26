import { BookmarkService } from './../../services/bookmark-service.service';
import { FilterByModule } from './../../models/filter-by/filter-by.module';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'bar-title',
  templateUrl: './bar-title.component.html',
  styleUrls: ['./bar-title.component.scss'],
})
export class BarTitleComponent implements OnInit {
  constructor(private bookmarkService: BookmarkService) {}

  filterBy!: FilterByModule;
  subscription!: Subscription;

  ngOnInit(): void {
    this.subscription = this.bookmarkService.filterBy$.subscribe((filterBy) => {
      this.filterBy = filterBy;
    });
  }

  onChangeFilter() {
    this.bookmarkService.setFilterBy(this.filterBy);
  }

  openTab() {
    window.open('http://localhost:8080/', '_blank',
    ' titlebar=no, resizable=no, status=no, location=no, menubar=no, width=400px, height=400px, top=50px, left=50px');
  }
}
