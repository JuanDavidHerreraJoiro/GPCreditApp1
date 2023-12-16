import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MediaObserver } from '@angular/flex-layout';
import { AuthenticationService } from 'src/app/features/authentication/sesion/services/authentication.service';
import { User } from 'src/app/features/authentication/sesion/classes/user';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @Input() sidenav!: MatSidenav;

  cambiar: boolean = true;
  user: User | null;

  constructor(public media: MediaObserver, private authService: AuthenticationService) { 
    this.user = new User();
  }

  ngOnInit() {
    this.authService.currentUser.subscribe(u => this.user = u);
  }


  cerrarSidenav() {
    if (this.sidenav.mode === "over") {
      this.sidenav.toggle()
    }
  }

  CambiarIcono() {
    return this.cambiar = this.cambiar ? false : true;
  }

  getHomeRoute(): string {
    if (this.user?.role === 'Client') {
      return 'inicio-cliente';
    }

    return '';
  }
}
