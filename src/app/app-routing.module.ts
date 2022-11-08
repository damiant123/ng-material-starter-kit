import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ProductFormComponentModule } from './components/product-form/product-form.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { LoginFormComponentModule } from './components/login-form/login-form.component-module';
import { UserServiceModule } from './services/user.service-module';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeFormComponentModule } from './components/employee-form/employee-form.component-module';
import { EmployeesServiceModule } from './services/employees.service-module';
import { CategoriesServiceModule } from "./services/categories.service-module";

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'create-product', component: ProductFormComponent },
      { path: 'create-employee', component: EmployeeFormComponent },
      { path: 'login', component: LoginFormComponent },
    ]),
    ProductFormComponentModule,
    ProductsServiceModule,
    EmployeeFormComponentModule,
    EmployeesServiceModule,
    LoginFormComponentModule,
    UserServiceModule,
    CategoriesServiceModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
