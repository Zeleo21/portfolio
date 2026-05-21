import { afterNextRender, Component, inject } from '@angular/core';
import { Tag, Theme } from '../components/tag/tag';
import { splitText, stagger, Timeline } from 'animejs';
import { AnimateService } from '../service/animate/animate.service';
import { Router } from '@angular/router';
import {Footer} from '../components/footer/footer';

@Component({
  selector: 'app-profile',
  imports: [Tag, Footer],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  protected readonly Theme = Theme;
  private readonly animateService: AnimateService = inject(AnimateService);
  private readonly router = inject(Router);

  private readonly engineerFullStackCharsStaggerDelay = 80;
  private readonly descriptionWordsStaggerDelay = 100;
  private readonly loopDelay = 5000;

  private originalSoftwareText = '';
  private originalDescriptionText = '';

  constructor() {
    afterNextRender(() => {
      const softwareEl = document.querySelector('.reveal-software') as HTMLElement;
      const descEl = document.querySelector('.reveal-description') as HTMLElement;

      this.originalSoftwareText = softwareEl?.innerHTML ?? '';
      this.originalDescriptionText = descEl?.innerHTML ?? '';

      const { chars } = splitText('.reveal-software', { words: false, chars: true });
      const { words } = splitText('.reveal-description', { words: true, chars: false });

      const initialTl = this.generateInitialTimeLine(chars, words);
      initialTl.onComplete = () => {
        setTimeout(() => this.generateLoopingTimeLine(), this.loopDelay);
      };
    });
  }

  private generateInitialTimeLine(chars: any[], words: any[]): Timeline {
    const tl = this.animateService.createTimeLine(false);

    tl.add(chars, this.animateService.getAppearingTextConfigWithSpecificStagger(this.engineerFullStackCharsStaggerDelay));
    tl.add(words, this.animateService.getAppearingTextConfigWithSpecificStagger(this.descriptionWordsStaggerDelay));
    tl.add('.reveal-grid', {
      duration: 500,
      opacity: { from: 0, to: 1 },
      translateY: { from: -200, to: 0 },
      ease: 'inOutBack(0)',
    });

    const commonConfig = {
      duration: 500,
      opacity: { from: 0, to: 1 },
      delay: stagger(100),
      ease: 'inOutSine',
    };

    const categories = ['.reveal-frontend', '.reveal-backend', '.reveal-infra', '.reveal-learning'];
    categories.forEach((cat, i) => {
      tl.add(cat, {
        ...commonConfig,
        translateX: { from: i % 2 === 0 ? -50 : 50, to: 0 },
      });
    });

    return tl;
  }

  private generateLoopingTimeLine(): Timeline {
    const softwareEl = document.querySelector('.reveal-software') as HTMLElement;
    const descEl = document.querySelector('.reveal-description') as HTMLElement;

    softwareEl.innerHTML = this.originalSoftwareText;
    descEl.innerHTML = this.originalDescriptionText;

    const { chars } = splitText('.reveal-software', { words: false, chars: true });
    const { words } = splitText('.reveal-description', { words: true, chars: false });

    const tl = this.animateService.createTimeLine(true, this.loopDelay);
    tl.add(chars, this.animateService.getAppearingTextConfigWithSpecificStagger(this.engineerFullStackCharsStaggerDelay));
    tl.add(words, this.animateService.getAppearingTextConfigWithSpecificStagger(this.descriptionWordsStaggerDelay));

    return tl;
  }

  protected navigateToProjects(): void {
    this.router.navigate(['/projects']);
  }
}
