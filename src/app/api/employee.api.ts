import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import { IEmployeeAbsence } from '../models/employeeAbsence';
import { IAbsence } from '../models/absence';

@Injectable( {
    providedIn: 'root',
} )
export class EmployeeAPIService {

    constructor( private httpClient: HttpClient ) {
    }

    allWithAbsence( ): Observable<IEmployeeAbsence> {
        let params = new HttpParams();
        return this.httpClient.get<IEmployeeAbsence>( 'employee', {} );
    }

    getAbsencesByEmployeeId( employeeId: number ): Observable<IAbsence[]> {
        return this.httpClient.get<IAbsence[]>( 'employee/' + employeeId );
    }
}
