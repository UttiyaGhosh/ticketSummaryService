import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

type AdminType = {
  id: number;
  name: string;
  designation: string;
  password: string;
};

@Component({
  selector: 'app-add-admin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-admin.component.html',
  styleUrl: './add-admin.component.css'
})
export class AddAdminComponent {

  @Output() addAdmin: EventEmitter<AdminType> = new EventEmitter<AdminType>();

  addAdminForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    designation: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  onSubmit() {
    this.addAdmin.emit({
      id: Math.floor(Math.random() * 1000),
      name: this.addAdminForm.value.name!,
      designation: this.addAdminForm.value.designation!,
      password: this.addAdminForm.value.password!,
    });
  }

}
