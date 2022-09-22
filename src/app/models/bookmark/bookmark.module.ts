// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @NgModule({
//   declarations: [],
//   imports: [CommonModule],
// })
// export class BookmarkModule {

// }
export interface BookmarkModule {
  id: string;
  url: string;
  name: string;
  icon?: string;
}
