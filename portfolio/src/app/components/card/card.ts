import {Component, computed, input, Signal} from '@angular/core';
import {Tag} from '../../projects/projects';

interface TagStyle {
  classes: string;
  label: string;
}

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
  host: { class: 'w-full' }
})
export class Card {
  readonly tags = input.required<Tag[]>();
  readonly title = input.required<string>();
  protected readonly tagStyles: Signal<TagStyle[]> = computed(() => {
    const tags = this.tags() ?? null;
    if(!tags || !tags.length) return [];
    return this.computeTagClasses(tags);
  })

  private computeTagClasses(tags: Tag[]): TagStyle[] {
    return tags.map(tag => {
      switch (tag) {
        case Tag.ANGULAR: return { classes: 'w-3 h-3 rounded-full bg-red-500', label: 'Angular' };
        case Tag.NODE:    return { classes: 'w-3 h-3 rounded-full bg-green-500', label: 'Node.js' };
        case Tag.SQL:     return { classes: 'w-3 h-3 rounded-full bg-blue-400', label: 'SQL' };
        default:          return { classes: 'w-3 h-3 rounded-full bg-zinc-500', label: tag };
      }
    });
  }
}
