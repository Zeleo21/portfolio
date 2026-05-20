import { Component } from '@angular/core';
import {Profile} from '../profile/profile';
import {Header} from '../components/header/header';

@Component({
  selector: 'app-home',
  imports: [
    Profile,
    Header
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
