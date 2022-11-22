import { AppBookmarkComponent } from './pages/app-bookmark/app-bookmark.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BookmarkListComponent } from './cmps/bookmark-list/bookmark-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    },
  {
    path: 'bookmark',
    component: AppBookmarkComponent,
  },
  {
    path: 'signup',
    component: HomePageComponent,
  },
  {
    path: 'login',
    component: HomePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
