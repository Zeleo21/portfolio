import {Component, input, Signal, signal} from '@angular/core';
import {Card} from '../components/card/card';


export enum Tag {
  ANGULAR = 'angular',
  NODE = 'node',
  SQL = 'sql',
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
  protected readonly presanseTags: Tag[] = [Tag.ANGULAR, Tag.NODE, Tag.SQL];
  //FIXME : not sure about naming here
  protected readonly presanseTitle: string = 'Prevention calculation to help detect early occupational deintegration';
}
