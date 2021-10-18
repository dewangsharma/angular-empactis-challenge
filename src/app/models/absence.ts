import { IEmployee } from "./employee";

// Absence entity
export interface IAbsence {
    id: number,
    employee: IEmployee,
    start: Date,
    end: Date,
    type: AbsenceType
}

export enum AbsenceType{
    AbsenceType1 = 1,
    AbsenceType2 = 2
}