import { Component } from '@angular/core';
import { ProductService, ProductType } from '../../services/product.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent {
  productId: string ="";
  product : ProductType = {
    _id:null,
    brand: '',
    name: '',
    description: ''
  };
  updateProductForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    brand: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });
  
  constructor(private _productService: ProductService,private route: ActivatedRoute) {}

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.productId = params['id'];
    });

    this._productService.getProduct(this.productId).subscribe((data) => {
      this.product=data
      this.updateProductForm = new FormGroup({
        name: new FormControl(this.product.name, [Validators.required, Validators.minLength(3)]),
        brand: new FormControl(this.product.brand, [Validators.required, Validators.minLength(3)]),
        description: new FormControl(this.product.description, [Validators.required, Validators.minLength(5)]),
      });
    });
    
  }

  onSubmit() {
    const product = {
      _id:this.product._id,
      brand: this.updateProductForm.value.brand!,
      name: this.updateProductForm.value.name!,
      description: this.updateProductForm.value.description!,
    }
    this._productService.updateProduct(product).subscribe((data) => console.log(data));
  }
}
