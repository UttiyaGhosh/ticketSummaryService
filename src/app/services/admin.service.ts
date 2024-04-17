import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface AdminResponse {
  success: string|null,
  error:string|null
};

export interface AdminType {
  _id: string,
  name: string;
  designation:string
  joinDate: Date;
  password:string;
};

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl: string = 'https://tss-server.vercel.app/api/admin';
  constructor(private http: HttpClient) {}

  getAllAdmins():Observable<AdminType[]> {
    return this.http.get<AdminType[]>(`${this.baseUrl}/all`);
  }

  addAdmin(admin:AdminType): Observable<AdminResponse> {
    return this.http.post<AdminResponse>(this.baseUrl, admin);
  }

  getAdmin():Observable<AdminType> {
    return this.http.get<AdminType>(this.baseUrl);
  }

  updateAdmin(admin:AdminType): Observable<AdminType> {
    return this.http.put<AdminType>(this.baseUrl, admin);
  }

  deleteAdmin(id:string): Observable<AdminType> {
    return this.http.delete<AdminType>(`${this.baseUrl}?_id=${id}`);
  }
  
}
