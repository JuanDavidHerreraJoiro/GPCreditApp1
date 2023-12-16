import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/features/authentication/sesion/services/authentication.service';

export const tokenValidationGuard: CanActivateFn = (route, state) => {
  const authService: AuthenticationService = inject(AuthenticationService);
  const router: Router = inject(Router);

  const user = authService.currentUserValue;
  if (user) {
      // logged in so return true
      return true;
  } else {
      // not logged in so redirect to login page with the return url
      router.navigate(['/auth/sesion/login'], { queryParams: { returnUrl: state.url } });
      return false;
  }
};
