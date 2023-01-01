import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoriesModule } from './../../models/categories/categories.module';
import { BookmarkService } from './../../services/bookmark-service.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-bookmark',
  templateUrl: './app-bookmark.component.html',
  styleUrls: ['./app-bookmark.component.scss'],
})
export class AppBookmarkComponent implements OnInit, OnChanges {
  constructor(
    private bookmarkService: BookmarkService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  categories$!: Observable<CategoriesModule>;

  ngOnInit(): void {
    this.route.params.subscribe(({ id, name }) => {
      if (id) {
        this.userService.get(id);
        this.categories$ = this.bookmarkService.categories$;
      } else {
        this.bookmarkService.getModel();
        this.categories$ = this.bookmarkService.categories$;
        // console.log(this.categories$);
      }
    });
  }
  ngOnChanges() {
  }
}
