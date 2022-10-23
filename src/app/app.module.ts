import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookmarkListComponent } from './cmps/bookmark-list/bookmark-list.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BookmarkCategory } from './cmps/bookmark-category/bookmark-category.component';
import { BookmarkPreviewComponent } from './cmps/bookmark-preview/bookmark-preview.component';
import { AppBookmarkComponent } from './pages/app-bookmark/app-bookmark.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { AppFooterComponent } from './cmps/app-footer/app-footer.component';
import { BarTitleComponent } from './cmps/bar-title/bar-title.component';
import { FormsModule } from '@angular/forms';
import { AddTabComponent } from './cmps/add-tab/add-tab.component';
import { BookmarkPrevieewLiComponent } from './cmps/bookmark-previeew-li/bookmark-previeew-li.component';

@NgModule({
  declarations: [
    AppComponent,
    BookmarkListComponent,
    HomePageComponent,
    BookmarkCategory,
    BookmarkPreviewComponent,
    AppBookmarkComponent,
    AppHeaderComponent,
    AppFooterComponent,
    BarTitleComponent,
    AddTabComponent,
    BookmarkPrevieewLiComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
