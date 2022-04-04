import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookaddonComponent } from './bookaddon.component';

describe('BookaddonComponent', () => {
  let component: BookaddonComponent;
  let fixture: ComponentFixture<BookaddonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookaddonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookaddonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
