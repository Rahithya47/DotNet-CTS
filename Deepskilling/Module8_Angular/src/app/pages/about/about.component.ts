import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, RouterModule],
  template: `
    <div class="dashboard-header">
      <h2>Module 8 Inventory Dashboard</h2>
      <button routerLink="/add-product">+ Deploy New Asset</button>
    </div>
    <div class="grid-container">
      <app-product-card *ngFor="let item of products" [product]="item"></app-product-card>
    </div>
  `,
  styles: [`
    .dashboard-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
    .grid-container { display: flex; flex-wrap: wrap; gap: 15px; justify-content: center; }
    button { padding: 10px 15px; background: #2e7d32; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold; }
  `]
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => this.products = data);
  }
}
