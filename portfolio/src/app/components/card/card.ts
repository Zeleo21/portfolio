import {Component, computed, input, output, Signal, signal} from '@angular/core';
import {Tag} from '../../projects/projects';
import {TagClassHelper, TagStyle} from '../../helper/tagClass.helper';



@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
  host: { class: 'block w-full' }
})
export class Card {
  readonly tags = input.required<Tag[]>();
  readonly title = input.required<string>();
  readonly shortDescription = input.required<string>();
  readonly description = input.required<string>();
  readonly keyFeatures = input.required<string[]>();
  readonly githubLink = input<string>('');

  protected readonly tagStyles: Signal<TagStyle[]> = computed(() => {
    const tags = this.tags() ?? null;
    if (!tags || !tags.length) return [];
    return TagClassHelper.computeTagClasses(tags);
  });
  protected readonly displayGithubLink = computed(() => this.githubLink() !== '');

  cardClick = output<void>();

  onCardClick() {
    this.cardClick.emit();
  }
}
