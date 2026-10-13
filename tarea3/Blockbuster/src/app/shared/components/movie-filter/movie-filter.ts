import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

export interface MovieFilters {
  title: string;
  director: string;
  producer: string;
  genre: string;
  year: string;
}

@Component({
  selector: 'app-movie-filter',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './movie-filter.html',
  styleUrls: ['./movie-filter.scss']
})
export class MovieFilterComponent implements OnInit, OnDestroy {
  @Output() filtersChange = new EventEmitter<MovieFilters>();
  private sub?: Subscription;

  form!: FormGroup<{
    title: FormControl<string>;
    director: FormControl<string>;
    producer: FormControl<string>;
    genre: FormControl<string>;
    year: FormControl<string>;
  }>;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.nonNullable.group({
      title: '', director: '', producer: '', genre: '', year: ''
    });
  }

  ngOnInit(): void {
    this.sub = this.form.valueChanges.subscribe(v => this.filtersChange.emit(v as MovieFilters));
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}