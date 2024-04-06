import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

type ProductType = {
  id: number;
  name: string;
  description: string;
};
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
  handleUpdate(id:number){
    this.showUpdateProductForm.emit({id});
  }

  products : ProductType[] = [
    {
      id:1,
      name:"Aspire 7 Laptop",
      description:"I7 Laptop with Nvidia RTX graphics card"
    },
    {
      id:2,
      name:"Asus Laptop",
      description:"AMD Laptop"
    }
  ];
}
