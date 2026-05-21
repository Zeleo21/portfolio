import {afterNextRender, Component, inject} from '@angular/core';
import {Tag, Theme} from '../components/tag/tag';
import {splitText, createTimeline, stagger} from 'animejs';
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
        loopDelay: 5000,
      })

      tl.add(engineerFullstackChars, this.animateService.getAppearingTextConfigWithSpecificStagger(this.engineerFullStackCharsStaggerDelay));
      tl.add(descriptionWords, this.animateService.getAppearingTextConfigWithSpecificStagger(this.descriptionWordsStaggerDelay));
      tl.add('.reveal-grid', {
        duration: 500,
        opacity: {
          from: 0,
          to: 1,
        },
        translateY: {
          from: -200,
          to: 0
        },
        ease: 'inOutBack(0)',
      })
      const commonConfig = {
        duration: 500,
        opacity: {
          from: 0,
          to: 1
        },
        delay: stagger(100),
        ease: 'inOutSine'
      }
      const categories = ['.reveal-frontend', '.reveal-backend', '.reveal-infra', '.reveal-learning'];
      for(let i = 0 ; i < categories.length ; i++){
        if (i % 2 === 0) {
          tl.add(categories[i], { ...commonConfig, translateX: { from: -50, to: 0 } });
        } else {
          tl.add(categories[i], { ...commonConfig, translateX: { from: 50, to: 0 } });
        }
      }
    });
  }

  protected navigateToProjects() {
    this.router.navigate(['/projects']);
  }
}
