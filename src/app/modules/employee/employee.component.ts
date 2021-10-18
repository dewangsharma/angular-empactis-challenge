import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeAPIService } from 'src/app/api/employee.api';
import { IEmployee } from 'src/app/models/employee';
import { IEmployeeAbsence } from 'src/app/models/employeeAbsence';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {

  items$: Observable<IEmployeeAbsence>;
  
  /**
   * Default constructor
   */
  constructor( private employeeApi: EmployeeAPIService, private router: Router ) {
    this.items$ = this.employeeApi.allWithAbsence();
  }

  /**
   * Open employee
   * @param employee 
   */
  open(employee: IEmployee ): void{
    this.router.navigateByUrl( '/employee/'+employee.id );
  }
}
