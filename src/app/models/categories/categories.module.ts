import { BookmarkModule } from './../bookmark/bookmark.module';

export interface CategoriesModule{
  [index: string]: BookmarkModule[]

}
