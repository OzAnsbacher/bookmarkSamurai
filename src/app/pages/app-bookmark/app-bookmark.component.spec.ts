import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBookmarkComponent } from './app-bookmark.component';

describe('AppBookmarkComponent', () => {
  let component: AppBookmarkComponent;
  let fixture: ComponentFixture<AppBookmarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppBookmarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppBookmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
