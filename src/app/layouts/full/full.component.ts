import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PATHS } from '../../routes/paths';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent {
  readonly dashboardPath = `/${PATHS.DASHBOARD}`;
  menuOpen = false;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) { }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  logout(): void {
    this.authService.logout();
    void this.router.navigate([PATHS.LOGIN]);
  }
}
