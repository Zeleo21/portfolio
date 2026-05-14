import {Component, computed, input} from '@angular/core';

export enum Theme {
  PURPLE = 'purple',
}

@Component({
  selector: 'app-tag',
  imports: [],
  templateUrl: './tag.html',
  styleUrl: './tag.scss',
})
export class Tag {
  label = input.required<string>();
  theme = input.required<Theme>();


  protected readonly themeClass = computed(() => {
    if(this.theme() === Theme.PURPLE) {
      return 'text-text text-sm font-bold';
    }
    return '';
  });
}
