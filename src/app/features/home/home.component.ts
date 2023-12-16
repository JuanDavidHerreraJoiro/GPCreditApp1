import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaObserver } from '@angular/flex-layout';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthenticationService } from '../authentication/sesion/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
  
export class HomeComponent implements OnInit {
  private mediaSubscription!: Subscription;
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  cerraSide: boolean = false;
  medias = ['md', 'sm', 'xs'];
  
  userLogged: boolean;

  constructor(private media: MediaObserver,
    private authService: AuthenticationService, 
    private cdr: ChangeDetectorRef) {
    this.userLogged = false;
  }

  ngOnInit() {
    this.authService.currentUser.subscribe(u => {
      this.userLogged = u == null;
      this.cdr.detectChanges();
      
      if (this.sidenav)
        this.setSideNavMode();
    });

    this.setSideNavMode();
  }

  setSideNavMode() {
    this.mediaSubscription = this.media.asObservable()
      .subscribe((change) => {
        if (this.sidenav) {
          if (this.medias.includes(change[0].mqAlias)) {
            this.sidenav.mode = 'over';
            this.sidenav.close();
          } else {
            this.sidenav.mode = 'side';
            this.sidenav.open();
          }
        }
      });
  }

  ngOnDestroy(): void {
    this.mediaSubscription.unsubscribe();
  }
}
