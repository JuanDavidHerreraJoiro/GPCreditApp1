import { Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { User } from 'src/app/features/authentication/sesion/classes/user';
import { AuthenticationService } from 'src/app/features/authentication/sesion/services/authentication.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  @Input() sidenav!: MatSidenav;
  user: User | null;

  constructor(private authService: AuthenticationService) 
  {
    this.user = new User();
  }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(u => this.user = u);
  }

  logout() {
    this.authService.logout();
  }
}
