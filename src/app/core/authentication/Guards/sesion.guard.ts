import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/features/authentication/sesion/services/authentication.service';

export const sesionGuard: CanActivateFn = (route, state) => {
  const authService: AuthenticationService = inject(AuthenticationService);
  const router: Router = inject(Router);

  const user = authService.currentUserValue;

  const expectedRole = route.data['role'];

  const goRoute = user?.role === 'Admin' ? '/cliente' : '/inicio-cliente';

  if (state.url === '/auth/sesion/login' && user ) {
    router.navigateByUrl(goRoute);

    return false;
  }

  if (user && expectedRole && user.role !== expectedRole) {
    router.navigateByUrl(goRoute);

    return false;
  }

  return true;
};
