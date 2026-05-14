import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular/src/icons';
import {SquareTerminal} from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

}
