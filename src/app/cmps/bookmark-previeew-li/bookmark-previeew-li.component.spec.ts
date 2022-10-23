import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkPrevieewLiComponent } from './bookmark-previeew-li.component';

describe('BookmarkPrevieewLiComponent', () => {
  let component: BookmarkPrevieewLiComponent;
  let fixture: ComponentFixture<BookmarkPrevieewLiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkPrevieewLiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookmarkPrevieewLiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
