import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class FilterByModule {}
export interface FilterByModule {
  bookmark: string;
  category: string;
}
