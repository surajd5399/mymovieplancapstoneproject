import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsmasterComponent } from './bookingsmaster.component';

describe('BookingsmasterComponent', () => {
  let component: BookingsmasterComponent;
  let fixture: ComponentFixture<BookingsmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingsmasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingsmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
