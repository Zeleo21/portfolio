import { Component } from '@angular/core';
import {Tag, Theme} from '../components/tag/tag';

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
}
