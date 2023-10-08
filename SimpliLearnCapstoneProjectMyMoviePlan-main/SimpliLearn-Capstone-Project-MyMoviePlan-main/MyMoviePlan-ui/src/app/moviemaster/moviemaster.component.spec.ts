import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviemasterComponent } from './moviemaster.component';

describe('MoviemasterComponent', () => {
  let component: MoviemasterComponent;
  let fixture: ComponentFixture<MoviemasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviemasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
