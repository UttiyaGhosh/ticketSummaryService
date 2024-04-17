import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, IAuth } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  authToken: IAuth = { message: '' };

  errorMessage: string = '';
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {}

  //if more than one validators use array
  loginForm = new FormGroup({
    username: new FormControl<string | null>('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    password: new FormControl<string | null>(null, [Validators.required,Validators.minLength(5)]),
  });
  onSubmit() {
    this.authService
      .login(this.loginForm.value.username!, this.loginForm.value.password!)
      .subscribe({
        next: () => {
          this.router.navigateByUrl('/');
        },
        error: (e) => {
          console.log(e);
          this.errorMessage = e.error.message;
        },
        complete: () => {
          console.info('complete');
        },
      });
  }
}
