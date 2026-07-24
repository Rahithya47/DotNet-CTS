import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div style="text-align: center; margin-top: 50px;">
      <h1>Welcome to Enterprise Hub</h1>
      <button routerLink="/products" style="padding: 10px 20px; font-weight: bold; cursor: pointer;">Enter Portal</button>
    </div>
  `
})
export class HomeComponent {}
