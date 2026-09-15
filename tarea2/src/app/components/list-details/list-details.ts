import { Component } from '@angular/core';
import { LeftPanel } from '../left-panel/left-panel';
import { RightPanel } from '../right-panel/right-panel';

@Component({
  selector: 'app-list-details',
  imports: [LeftPanel, RightPanel],
  templateUrl: './list-details.html',
  styleUrl: './list-details.scss',
})
export class ListDetails {
  titles: string[] = [
    'Little Red Riding Hood', 'Alice in Wonderland', 'Little Mermaind', '505', 'Dead Poet Society'
  ];

  selected: string | null = null;

  onSelect(title: string){
    this.selected = title;
  }

  onClear(){
    this.selected = null;
  }
}
