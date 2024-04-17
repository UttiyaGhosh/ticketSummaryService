import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminService, AdminType } from '../../services/admin.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-admin',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './add-admin.component.html',
  styleUrl: './add-admin.component.css'
})
export class AddAdminComponent {

  message: string|null = ""

  constructor(private _adminService: AdminService) {}

  addAdminForm = new FormGroup({
    _id: new FormControl('', [Validators.required, Validators.minLength(3)]),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    designation: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  onSubmit() {
    const admin = {
      _id: this.addAdminForm.value._id!,
      name: this.addAdminForm.value.name!,
      designation: this.addAdminForm.value.designation!,
      password: this.addAdminForm.value.password!,
      joinDate:new Date()
    }
    this._adminService.addAdmin(admin).subscribe((data) => {
      this.message=data.message
    });
  }

}
