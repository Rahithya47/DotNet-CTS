import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { StockStatusPipe } from '../../pipes/stock-status.pipe';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, StockStatusPipe],
  template: `
    <div class="card" [style.border-color]="product.stockCount === 0 ? '#e0e0e0' : '#1976d2'">
      <img [src]="product.imageUrl" [alt]="product.name">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <div class="price">{{ product.price | currency:'INR':'symbol' }}</div>
      <div class="badge">{{ product.stockCount | stockStatus }}</div>
    </div>
  `,
  styles: [`
    .card { border: 2px solid #1976d2; border-radius: 8px; padding: 15px; margin: 10px; width: 230px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.1); background: white; }
    img { max-width: 100%; border-radius: 4px; }
    .price { font-size: 1.2rem; font-weight: bold; color: #2e7d32; margin: 10px 0; }
    .badge { font-weight: 600; font-size: 0.9rem; }
  `]
})
export class ProductCardComponent {
  @Input() product!: Product;
}
