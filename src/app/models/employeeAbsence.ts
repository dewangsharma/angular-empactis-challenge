import { IEmployee } from './employee';

// Employee's absence count
export interface IEmployeeAbsence {
  employee: IEmployee;
  absenceCount: number;
}
