import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeAbsenceComponent } from './modules/employee-absence/employee-absence.component';
import { EmployeeComponent } from './modules/employee/employee.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'employee'
  },
  {
    path: 'employee',
    component: EmployeeComponent  
  },
  {
    path: 'employee/:id',
    component: EmployeeAbsenceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
