import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Simple mock authorization check
    const isAdmin = true; 
    if (!isAdmin) {
      this.router.navigate(['/products']);
      return false;
    }
    return true;
  }
}
