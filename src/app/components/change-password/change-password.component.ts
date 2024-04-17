import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AdminService, AdminType } from '../../services/admin.service';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent {
  userId: string|null ="";
  message: string|null = ""
  admin : AdminType = {
    _id:'',
    name: '',
    designation: '',
    joinDate:new Date(),
    password:''
  };

  changePasswordForm = new FormGroup({
    oldPassword: new FormControl('', [Validators.required, Validators.minLength(3)]),
    newPassword: new FormControl('', [Validators.required, Validators.minLength(3)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  constructor(private _adminService: AdminService) {}

  ngOnInit(){
    this.userId = localStorage.getItem('userId')

    this._adminService.getAdmin(this.userId).subscribe((data) => {
      this.admin=data
      console.log(this.admin)
      this.changePasswordForm = new FormGroup({
        oldPassword: new FormControl('', [Validators.required, Validators.minLength(5)]),
        newPassword: new FormControl('', [Validators.required, Validators.minLength(5)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.minLength(5)]),
      });
    });
    
  }

  onSubmit() {
    if(!(this.changePasswordForm.value.newPassword! == this.changePasswordForm.value.confirmPassword!)){
      this.message="Passwords do not match"
    }else{
      const changePassword = {
        _id: this.admin._id,
        password: this.changePasswordForm.value.oldPassword!,
        newPassword:this.changePasswordForm.value.newPassword!,
      }
      this._adminService.changePassword(changePassword).subscribe((data) => {
        this.message=data.message
      });
    }
  }
}
