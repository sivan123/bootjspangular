import { Component, OnInit } from '@angular/core';
import { Product } from 'src/domain/product';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-tabledemo',
  templateUrl: './tabledemo.component.html',
  styleUrls: ['./tabledemo.component.css']
})
export class TabledemoComponent  implements OnInit {
  products: Product[] = [{}];
  cols: any[] = [{}];
  exportColumns: any[] = [{}];;
  constructor(private productService: ProductService) {}

  ngOnInit() {
      this.productService.getProductsMini().then((data) => {
          this.products = data;
      });

      this.cols = [
        { field: 'code', header: 'Code', customExportHeader: 'Product Code' },
        { field: 'name', header: 'Name' },
        { field: 'category', header: 'Category' },
        { field: 'quantity', header: 'Quantity' }
    ];

    this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));

  }

  getInput(event: Event) {
    return (event.target as HTMLInputElement).value;
  }

}
