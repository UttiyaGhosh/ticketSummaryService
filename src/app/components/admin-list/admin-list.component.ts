import { NgFor } from '@angular/common';
import { Component, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdminService, AdminType } from '../../services/admin.service';

@Component({
  selector: 'app-admin-list',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './admin-list.component.html',
  styleUrl: './admin-list.component.css'
})
export class AdminListComponent {

  admins : AdminType[] = [];
  constructor(private _adminService: AdminService) {}

  ngOnInit(){
    this._adminService.getAllAdmins().subscribe((data) => this.admins=data);
  }

  handleDelete(id:string) {
    this._adminService.deleteAdmin(id).subscribe((data) => this.admins = this.admins.filter(admin=>admin._id!=id));
  }
}
