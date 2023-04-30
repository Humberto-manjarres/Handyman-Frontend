import { NgModule } from '@angular/core';

/* exportamos RouterModule para cualquier otro modulo pueda disponer de AppRoutingModule */
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ServiceReportComponent } from './pages/service-report/service-report.component';
import { WorkingHoursComponent } from './pages/working-hours/working-hours.component';

const routes:Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'horas-trabajadas', component: WorkingHoursComponent},
  {path: 'reporte-horas', component: ServiceReportComponent},
  {path: '', redirectTo:'/dashboard', pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
