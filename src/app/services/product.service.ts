import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ProductResponse {
  message:string|null,
  payload: string|ProductType|null
};

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
  private baseUrl: string = 'https://tss-server.vercel.app/api/product';
  constructor(private http: HttpClient) {}

  getAllProducts():Observable<ProductType[]> {
    return this.http.get<ProductType[]>(`${this.baseUrl}/all`);
  }

  addProduct(product:ProductType): Observable<ProductResponse> {
    return this.http.post<ProductResponse>(this.baseUrl, product);
  }

  getProduct(id:string):Observable<ProductType> {
    return this.http.get<ProductType>(`${this.baseUrl}?_id=${id}`);
  }

  updateProduct(product:ProductType): Observable<ProductResponse> {
    return this.http.put<ProductResponse>(this.baseUrl, product);
  }

  deleteProduct(id:string): Observable<ProductType> {
    return this.http.delete<ProductType>(`${this.baseUrl}?_id=${id}`);
  }
}
