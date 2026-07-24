import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockStatus',
  standalone: true
})
export class StockStatusPipe implements PipeTransform {
  transform(stockCount: number): string {
    if (stockCount === 0) return 'Out of Stock ❌';
    if (stockCount <= 5) return 'Low Stock ⚠️';
    return 'In Stock ✅';
  }
}
