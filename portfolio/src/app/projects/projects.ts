import {afterNextRender, Component, computed, inject, input, Signal, signal} from '@angular/core';
import {Card} from '../components/card/card';
import {AnimateService} from '../service/animate/animate.service';
import {stagger} from 'animejs';
import {TagClassHelper, TagStyle} from '../helper/tagClass.helper';

export enum Tag {
  ANGULAR = 'angular',
  NODE = 'node',
  SQL = 'sql',
  REACT = 'react',
  KONVA = 'konva',
  REACTNATIVE = 'reactnative',
  EXPO = 'expo',
  HARDWARE = 'hardware',
  BLE = 'ble',
}

@Component({
  selector: 'app-projects',
  imports: [
    Card
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  host: { class: 'h-full' }
})
export class Projects {
  private readonly animateService: AnimateService = inject(AnimateService);

  activeCard = signal<any | null>(null);

  openModal(card: any) {
    this.activeCard.set(card);
  }

  closeModal() {
    this.activeCard.set(null);
  }

  protected readonly tagStyles: Signal<TagStyle[]> = computed(() => {
    const tags = this.activeCard()?.tags ?? null;
    if (!tags || !tags.length) return [];
    return TagClassHelper.computeTagClasses(tags);
  });

  constructor() {
    afterNextRender(() => {
      const tl = this.animateService.createTimeLine(false);
      const commonConfig = {
        duration: 500,
        opacity: { from: 0, to: 1 },
        delay: stagger(500),
        ease: 'inOutSine',
      };
      tl.add('.timeline-item', {
        ...commonConfig,
        translateY: [50,0]
      });
    })
  }

  protected readonly cardInformation = [
    {
      tags: [Tag.ANGULAR, Tag.NODE, Tag.SQL],
      title: 'Prevention calculation to help detect early occupational deintegration',
      shortDescription: 'A tool designed to help French Doctors identify risky employees',
      description: 'A tool designed to help French doctors and occupational health services identify employees potentially at risk in their professional environment.',
      keyFeatures: ['8 millions+ employees', 'batching, SQL Trigger, indexing', 'smart SQL scanning (no offset, id based)', 'recurrent task - weekly update of score'],
      githubLink: '',
    },
    {
      tags: [Tag.REACTNATIVE, Tag.EXPO, Tag.BLE, Tag.HARDWARE],
      title: 'Agora Pulse',
      shortDescription: 'a mobile application and hardware sensor to help merchant send ads via bluetooth to customers passing by',
      description: 'A group school projects that uses bluetooth with BLE and sensors to send ads to customers passing by in front of the store to receive custom ads through AI generated ads',
      keyFeatures: ['mobile application', 'AI generation and LLM integration', 'react-native', 'design thinking' ],
      githubLink: 'https://github.com/Ligne8/AgoraPulse-Application',
    },
    {
      tags: [Tag.REACT, Tag.KONVA],
      title: 'Maze Generator',
      shortDescription: 'A little project to generate maze in realtime',
      description: 'A maze generator that follows classic generation algorithm and help visualize the generation in realtime',
      keyFeatures: ['Randomized depth-first search', 'realtime', 'react konva and canvas' ],
      githubLink: 'https://github.com/Zeleo21/pathfinder',
    }
  ]
}
