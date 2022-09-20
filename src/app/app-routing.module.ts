import { HomePageComponent } from './pages/home-page/home-page.component';
import { BookmarkListComponent } from './cmps/bookmark-list/bookmark-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HomePageComponent,
  //   },
  {
    path: '',
    component: BookmarkListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
