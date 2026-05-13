import { Component } from '@angular/core';
import {Profile} from '../profile/profile';

@Component({
  selector: 'app-home',
  imports: [
    Profile
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
