import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

type ProductType = {
  id: number;
  brand: string;
  name: string;
  description: string;
};

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  @Output() addProduct: EventEmitter<ProductType> = new EventEmitter<ProductType>();

  addProductForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  onSubmit() {
    this.addProduct.emit({
      id: Math.floor(Math.random() * 1000),
      brand: this.addProductForm.value.name!,
      name: this.addProductForm.value.name!,
      description: this.addProductForm.value.description!,
    });
  }
  
}