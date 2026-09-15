import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-left-panel',
  imports: [NgFor],
  templateUrl: './left-panel.html',
  styleUrl: './left-panel.scss',
})
export class LeftPanel {
  @Input() titles: string[] = [];
  @Input() selected: string | null = null;
  @Output() selectedTitle =  new EventEmitter<string>();

  select(title: string) {
    this.selectedTitle.emit(title);
  }
}
