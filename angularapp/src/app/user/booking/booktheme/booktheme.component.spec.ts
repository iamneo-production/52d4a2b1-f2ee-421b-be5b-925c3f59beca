import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookthemeComponent } from './booktheme.component';

describe('BookthemeComponent', () => {
  let component: BookthemeComponent;
  let fixture: ComponentFixture<BookthemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookthemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookthemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
