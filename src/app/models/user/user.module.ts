import { BookmarkModule } from '../bookmark/bookmark.module';

export interface UserModule {
  _id?: string;
  username: string;
  password: string;
  bookmarks: BookmarkModule[];
}
export interface UserIdModule {
  _id: string;
}
export interface UserLoginModule {
  _id?: string;
  username: string;
  password?: string;
}
