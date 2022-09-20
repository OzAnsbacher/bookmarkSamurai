import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkPreviewComponent } from './bookmark-preview.component';

describe('BookmarkPreviewComponent', () => {
  let component: BookmarkPreviewComponent;
  let fixture: ComponentFixture<BookmarkPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookmarkPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
