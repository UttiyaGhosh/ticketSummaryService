import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService, ProductType } from '../../services/product.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  message: string|null = ""

  constructor(private _productService: ProductService) {}
  
  addProductForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    brand: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  onSubmit() {
    const product = {
      _id: null,
      brand: this.addProductForm.value.brand!,
      name: this.addProductForm.value.name!,
      description: this.addProductForm.value.description!,
    }
    this._productService.addProduct(product).subscribe((data) => this.message=data.message);
  }
}
