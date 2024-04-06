import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AdminListComponent } from './components/admin-list/admin-list.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';

export const routes: Routes = [
  { path: '', component: AdminListComponent },
  { path: 'addAdmin', component: AddAdminComponent},
  { path: 'products', component: ProductListComponent },
  { path: 'addProduct', component: AddProductComponent},
  { path: '**', component: PageNotFoundComponent },
];
