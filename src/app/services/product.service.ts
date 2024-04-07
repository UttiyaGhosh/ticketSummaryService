import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ProductType {
  _id: null|string,
  brand: string;
  name: string;
  description: string;
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl: string = 'http://localhost:3001/product';
  constructor(private http: HttpClient) {}

  getAllProducts():Observable<ProductType[]> {
    return this.http.get<ProductType[]>(`${this.baseUrl}/all`);
  }

  addProduct(product:ProductType): Observable<ProductType> {
    return this.http.post<ProductType>(this.baseUrl, product);
  }

  getProduct():Observable<ProductType> {
    return this.http.get<ProductType>(this.baseUrl);
  }

  updateProduct(product:ProductType): Observable<ProductType> {
    return this.http.put<ProductType>(this.baseUrl, product);
  }

  deleteProduct(id:string): Observable<ProductType> {
    return this.http.delete<ProductType>(`${this.baseUrl}?_id=${id}`);
  }
}
