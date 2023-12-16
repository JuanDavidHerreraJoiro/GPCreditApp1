import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { AuthenticationService } from 'src/app/features/authentication/sesion/services/authentication.service';
import { User } from 'src/app/features/authentication/sesion/classes/user';
import { ResponseModel } from 'src/app/shared/classes/response';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private authService: AuthenticationService,
        /*private messageService: MessageService*/) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const currentUser = this.authService.currentUserValue;

        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            })
        }

        return next.handle(request).pipe(
            catchError((error) => {
                if (error.status === 401) {
                    console.log('Error 401');
                    return this.handle401Error(request, next);
                }
                else if (error.status === 500 || error.status === 0) {
                    console.log('Error 500');
                }
                else {
                    console.log('Error', error.error.message, 'TypeMessage.Error');
                }

                return throwError(() => error);
            })
        );
    }

    private handle401Error(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.authService.refreshToken().pipe(
            switchMap((resp: ResponseModel<User>) => {
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${resp.data.token}`
                    }
                });
                return next.handle(request);
            }),
            catchError((error) => {
                this.authService.logout();
                console.log('Error refreshtoken');
                return throwError(() => error);
            })
        );
    }
}