import {afterNextRender, Component, inject} from '@angular/core';
import {Tag, Theme} from '../components/tag/tag';
import { splitText, createTimeline } from 'animejs';
import {AnimateService} from '../service/animate/animate.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [
    Tag
  ],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  protected readonly Theme = Theme;
  private readonly animateService: AnimateService = inject(AnimateService);
  private readonly engineerFullStackCharsStaggerDelay: number = 80;
  private readonly descriptionWordsStaggerDelay: number = 100;
  private router = inject(Router);

  constructor() {
    afterNextRender(() => {
      const { chars: engineerFullstackChars } = splitText('.reveal-software', { words: false, chars: true });
      const { words: descriptionWords } = splitText('.reveal-description', { words: true, chars: false });

      const tl = createTimeline({
        defaults: {
          ease: 'outQuart',
          duration: 600,
        },
        loop: true,
        loopDelay: 5000,
      })

      tl.add(engineerFullstackChars, this.animateService.getAppearingTextConfigWithSpecificStagger(this.engineerFullStackCharsStaggerDelay));
      tl.add(descriptionWords, this.animateService.getAppearingTextConfigWithSpecificStagger(this.descriptionWordsStaggerDelay));
    });
  }

  navigateToProjects() {
    this.router.navigate(['/projects']);
  }
}
