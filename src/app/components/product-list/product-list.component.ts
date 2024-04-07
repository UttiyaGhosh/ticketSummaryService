import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService, ProductType } from '../../services/product.service';

type updateProductFormType = {
  id: number;
};

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor,RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent {
  @Output() showUpdateProductForm: EventEmitter<updateProductFormType> = new EventEmitter<updateProductFormType>();

  products : ProductType[] = [];
  constructor(private _productService: ProductService) {}

  ngOnInit(){
    this._productService.getAllProducts().subscribe((data) => {
      console.log(data)
      this.products=data
    });
  }

  handleDelete(id:string|null) {
    if(id)
      this._productService.deleteProduct(id).subscribe((data) => console.log(data));
    
  }

}
