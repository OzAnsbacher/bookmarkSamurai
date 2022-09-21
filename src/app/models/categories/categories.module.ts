import { BookmarkModule } from './../bookmark/bookmark.module';
// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';



// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
// export class CategoriesModule { }

export interface CategoriesModule{
  [index: string]: BookmarkModule[]

}
