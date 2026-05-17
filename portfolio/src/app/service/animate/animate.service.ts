import { Injectable } from '@angular/core';
import {AnimationParams, stagger} from 'animejs';

@Injectable({
  providedIn: 'root',
})
export class AnimateService {
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
