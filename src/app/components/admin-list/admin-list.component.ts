import { NgFor } from '@angular/common';
import { Component, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';

type AdminType = {
  id: number;
  name: string;
  designation:string
  joinDate: Date;
};

@Component({
  selector: 'app-admin-list',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './admin-list.component.html',
  styleUrl: './admin-list.component.css'
})
export class AdminListComponent {

  admins : AdminType[] = [
    {
      id:1,
      name:"John Doe",
      designation:"CTO",
      joinDate:new Date()
    },
    {
      id:2,
      name:"Jane Doe",
      designation:"Manager",
      joinDate:new Date()
    }
  ];
}
