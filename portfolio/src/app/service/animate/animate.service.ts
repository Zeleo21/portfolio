import { Injectable } from '@angular/core';
import {AnimationParams, createTimeline, stagger, Timeline} from 'animejs';

@Injectable({
  providedIn: 'root',
})
export class AnimateService {

  public createTimeLine(loop: boolean, delay?: number): Timeline {
    return createTimeline({
      defaults: {
        ease: 'outQuart',
        duration: 600,
      },
      loopDelay: delay ?? 5000,
      loop,
    })
  }

  public getAppearingTextConfigWithSpecificStagger(delay: number): AnimationParams {
    return {
      opacity: {
        from: 0,
          to: 1
      },
      y: {
        from: 10,
          to: 0,
      },
      delay: stagger(delay),
    }
  }
}
