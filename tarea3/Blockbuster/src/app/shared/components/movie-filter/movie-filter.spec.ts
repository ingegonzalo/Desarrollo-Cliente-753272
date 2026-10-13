import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFilterComponent } from './movie-filter';

describe('MovieFilterComponent', () => {
  let component: MovieFilterComponent;
  let fixture: ComponentFixture<MovieFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieFilterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieFilterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
