import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { User } from '../classes/user';
import { catchError, of, tap, Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ResponseModel } from 'src/app/shared/classes/response';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
  
export class AuthenticationService {

  private baseUrl: string = environment.baseUrl;

  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;

  constructor(private http: HttpClient,
    private router: Router) {
    var jwtHelper = new JwtHelperService();
    this.currentUserSubject = new BehaviorSubject<User | null>(jwtHelper.decodeToken(JSON.parse(localStorage.getItem('token') || 'null')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  login(userName: string, password: string) {
    const body = {userName, password};

    return this.http.post<ResponseModel<User>>( `${this.baseUrl}/Authentication/authenticate`, body, { withCredentials: true } )
      .pipe(
        tap(resp => {
          localStorage.removeItem('token');
          localStorage.setItem('token', JSON.stringify( resp.data.token ));
          this.currentUserSubject.next(resp.data)
        })
      );
  }

  refreshToken() {
    return this.http.post<ResponseModel<User>>(`${this.baseUrl}/Authentication/refresh-token`, {}, { withCredentials: true } )
      .pipe(
        tap(resp => {
          localStorage.removeItem('token');
          localStorage.setItem('token', JSON.stringify( resp.data.token ));
          this.currentUserSubject.next(resp.data);
        })
      );
  }

  logout() {
    localStorage.removeItem('token');
    this.currentUserSubject.next(null!);
    this.router.navigate(['']);
  }
  
}

