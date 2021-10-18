import { Component } from '@angular/core';
import {map, switchMap, take, tap} from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeAPIService } from 'src/app/api/employee.api';
import { IAbsence } from 'src/app/models/absence';
import { IEmployee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee-absence',
  templateUrl: './employee-absence.component.html',
  styleUrls: ['./employee-absence.component.scss']
})
export class EmployeeAbsenceComponent {

  employeeId$: Observable<number>;
  employee: IEmployee;
  items: IAbsence[];

  constructor(private route: ActivatedRoute, private employeeApi: EmployeeAPIService ) 
  {
    this.employeeId$ = this.route.paramMap
    .pipe( map( paramMap => +paramMap.get( 'id' ) ) );

    this.employeeId$
    .pipe(
        switchMap( id => this.employeeApi.getAbsencesByEmployeeId( id ) ),
        tap( t => {
          this.items = t ;
          if(this.items.length > 0)
          {
            this.employee = this.items[0].employee;
          } 
        }),
        take(1)
    ).subscribe();
  }
}
