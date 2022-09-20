import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkCategoryComponent } from './bookmark-category.component';

describe('BookmarkCategoryComponent', () => {
  let component: BookmarkCategoryComponent;
  let fixture: ComponentFixture<BookmarkCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookmarkCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
