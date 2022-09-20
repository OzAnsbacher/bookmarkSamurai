import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookmarkListComponent } from './cmps/bookmark-list/bookmark-list.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BookmarkCategory } from './cmps/bookmark-category/bookmark-category.component';
import { BookmarkPreviewComponent } from './cmps/bookmark-preview/bookmark-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    BookmarkListComponent,
    HomePageComponent,
    BookmarkCategory,
    BookmarkPreviewComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
