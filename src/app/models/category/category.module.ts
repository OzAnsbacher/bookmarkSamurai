import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class CategoryModule {

}
export interface CategoryModule {
  id: string;
  url: string;
  name: string;
}
