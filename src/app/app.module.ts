import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { WorkingHoursComponent } from './pages/working-hours/working-hours.component';
import { ServiceReportComponent } from './pages/service-report/service-report.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { ResultHoursworkingComponent } from './components/result-hoursworking/result-hoursworking.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FechaComponent } from './components/fecha/fecha.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    SidebarComponent,
    WorkingHoursComponent,
    ServiceReportComponent,
    ResultHoursworkingComponent,
    FechaComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule, BrowserAnimationsModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
