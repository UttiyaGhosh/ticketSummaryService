import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AdminListComponent } from './components/admin-list/admin-list.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';

export const routes: Routes = [
  { path: '', component: AdminListComponent },
  { path: 'addAdmin', component: AddAdminComponent},
  { path: 'products', component: ProductListComponent },
  { path: 'addProduct', component: AddProductComponent},
  { path: 'updateProduct/:id', component: UpdateProductComponent},
  { path: 'changePassword', component: ChangePasswordComponent},
  { path: 'logout', component: LogoutComponent },
  { path: '**', component: PageNotFoundComponent },
];
