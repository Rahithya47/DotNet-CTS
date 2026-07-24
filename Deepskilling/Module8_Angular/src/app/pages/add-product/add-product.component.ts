import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="form-container">
      <h2>Add New Catalog Asset</h2>
      <form [formGroup]="productForm" (ngSubmit)="onSubmit()">
        <label>Product Name</label>
        <input formControlName="name" type="text" placeholder="Ex: Cloud Router">
        
        <label>Description</label>
        <textarea formControlName="description" placeholder="Enter specifications..."></textarea>
        
        <label>Unit Price (INR)</label>
        <input formControlName="price" type="number">
        
        <label>Initial Stock</label>
        <input formControlName="stockCount" type="number">

        <button type="submit" [disabled]="productForm.invalid">Register Asset</button>
      </form>
    </div>
  `,
  styles: [`
    .form-container { max-width: 500px; margin: 30px auto; padding: 25px; border: 1px solid #ccc; border-radius: 8px; background: #fff; }
    form { display: flex; flex-direction: column; }
    label { margin-top: 12px; font-weight: 600; }
    input, textarea { padding: 8px; margin-top: 5px; border: 1px solid #ccc; border-radius: 4px; }
    button { margin-top: 20px; padding: 12px; background: #1976d2; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;}
    button:disabled { background: #b0bec5; cursor: not-allowed; }
  `]
})
export class AddProductComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService, private router: Router) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
      price: [0, [Validators.required, Validators.min(1)]],
      stockCount: [0, [Validators.required, Validators.min(0)]],
      imageUrl: ['https://placehold.co']
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      this.productService.addProduct(this.productForm.value);
      this.router.navigate(['/products']);
    }
  }
}
