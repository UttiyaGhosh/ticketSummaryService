import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface AdminResponse {
  message:string|null,
  payload: string|AdminType|null
};

export interface AdminType {
  _id: string,
  name: string;
  designation:string
  joinDate: Date;
  password:string;
};

export interface ChangePasswordType {
  _id: string,
  password:string,
  newPassword:string
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

  getAdmin(id:string|null):Observable<AdminType> {
    return this.http.get<AdminType>(`${this.baseUrl}?_id=${id}`);
  }

  changePassword(changePassword:ChangePasswordType): Observable<AdminResponse> {
    return this.http.put<AdminResponse>(this.baseUrl, changePassword);
  }

  deleteAdmin(id:string): Observable<AdminType> {
    return this.http.delete<AdminType>(`${this.baseUrl}?_id=${id}`);
  }
  
}
