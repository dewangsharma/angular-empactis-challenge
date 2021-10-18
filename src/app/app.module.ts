import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableModule } from './modules/table/table.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpInterceptorProviders } from './shared/url.interceptor';
import { EmployeeAbsenceComponent } from './modules/employee-absence/employee-absence.component';
import { EmployeeComponent } from './modules/employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeAbsenceComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule
  ],
  providers: [
    HttpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
