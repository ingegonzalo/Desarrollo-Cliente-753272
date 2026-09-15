import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-right-panel',
  imports: [NgIf],
  templateUrl: './right-panel.html',
  styleUrl: './right-panel.scss',
})
export class RightPanel {
  @Input() title: string | null = null;
  @Output() clear = new EventEmitter<void>();

  onClickClear() {
    this.clear.emit();
  }
}
