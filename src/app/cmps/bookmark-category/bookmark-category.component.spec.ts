import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkCategory } from './bookmark-category.component';

describe('BookmarkCategory', () => {
  let component: BookmarkCategory;
  let fixture: ComponentFixture<BookmarkCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkCategory ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookmarkCategory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
