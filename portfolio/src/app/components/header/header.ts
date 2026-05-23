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

  protected navigateToHome() {
    this.router.navigate(['/'])
  }

  protected toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
