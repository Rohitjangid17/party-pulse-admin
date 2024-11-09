import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);
  let token: string | null = "";

  // Check if running in the browser
  if (isPlatformBrowser(platformId)) {
    token = localStorage.getItem("authToken");
  }

  // Check if the user is trying to access the login route
  if (route.routeConfig?.path === "login") {
    if (token) {
      // User is logged in, redirect to dashboard
      router.navigate(["/parties"]);
      return false; // Prevent access to the login route
    }
  } else {
    // If not on the login route, check if user is logged in
    if (!token) {
      // User is not logged in, redirect to login
      router.navigate(["/login"]);
      return false; // Prevent access to protected routes
    }
  }

  // Allow access to the requested route
  return true;
}