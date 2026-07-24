import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsArray: Product[] = [
    { id: 1, name: 'Enterprise Laptop', description: 'High performance Dev workstation.', price: 95000, imageUrl: 'https://placehold.co', stockCount: 12 },
    { id: 2, name: 'Mechanical Keyboard', description: 'Tactile switches for rapid typing.', price: 8500, imageUrl: 'https://placehold.co', stockCount: 3 },
    { id: 3, name: '4K UltraWide Monitor', description: 'Massive canvas for dual-window splits.', price: 35000, imageUrl: 'https://placehold.co', stockCount: 0 }
  ];

  private productsSubject = new BehaviorSubject<Product[]>(this.productsArray);

  getProducts(): Observable<Product[]> {
    return this.productsSubject.asObservable();
  }

  addProduct(product: Omit<Product, 'id'>): void {
    const newProduct: Product = {
      ...product,
      id: this.productsArray.length + 1
    };
    this.productsArray.push(newProduct);
    this.productsSubject.next([...this.productsArray]);
  }
}
