import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface IAuth {
  message: string;
}

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  public _isLoggedIn$ = new BehaviorSubject<boolean>(false);

  isLoggedIn$ = this._isLoggedIn$.asObservable();

  private userId = '';
  private url: string = 'https://tss-server.vercel.app/api/admin/login';

  constructor(private http: HttpClient) {
    const userId = localStorage.getItem('userId')
    this._isLoggedIn$.next(!!userId && userId!==undefined);
    this.userId = userId || '';
  }

  login(_id: string, password: string): Observable<IAuth> {
    return this.http
      .post<IAuth>(this.url, {
        _id: _id,
        password: password,
      })
      .pipe(
        tap((response: any) => {
          this._isLoggedIn$.next(true);
          this.userId = response._id;
          localStorage.setItem('userId', this.userId);
        })
      );
  }

  logout() {
    this._isLoggedIn$.next(false);
    this.userId = '';

    localStorage.removeItem('userId');
  }  
}
