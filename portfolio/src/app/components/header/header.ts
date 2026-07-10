import { Component, inject } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular/src/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private router = inject(Router);
  protected isMenuOpen: boolean = false;

  protected urls = {
    contact: '/contact',
    experience: '/experience',
    education: '/education',
    about: '/about',
    projetcts: '/projects',
  }

  protected navigateToHome() {
    this.router.navigate(['/'])
  }

  protected toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  protected navigateTo(url: string, toggleMenu: boolean = false) {
    if(toggleMenu) this.toggleMenu();
    this.router.navigate([url]);
  }
}
