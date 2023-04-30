import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceReport } from 'src/app/models/serviceRepost';
import { ServiceReportService } from '../../services/service-report.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-service-report',
  templateUrl: './service-report.component.html',
  styleUrls: ['./service-report.component.css']
})
export class ServiceReportComponent implements OnDestroy{
  public dateInitial:number;
  public dateFinal:number;
  public formSubmitted:boolean = false;
  public createServiceSubcribe: Subscription| undefined;

  public reportServiceForm = this.fb.group({
    id: ['', Validators.required],
    service: ['', Validators.required]
    /* dateInit: ['',Validators.required],
    dateFinal: ['',Validators.required] */
  })
  picker: any;

  constructor(private fb:FormBuilder, private serviceReportService:ServiceReportService, private router:Router){}

  ngOnDestroy(): void {
    //this.createServiceSubcribe.unsubscribe();
  }

  addServicesReport(){
    //console.log('form data--> ',this.reportServiceForm.value);
    this.formSubmitted = true;
    /* const {id, service, dateInit, dateFinal} = this.reportServiceForm.value; */

    const {id, service} = this.reportServiceForm.value;
    const data: ServiceReport = {
      idTechnical: id,
      idService: service,
      startDate: new Date(this.dateInitial),
      endDate: new Date(this.dateFinal)
      /* startDate: new Date(dateInit),
      endDate: new Date(dateFinal) */
    }
    if (this.reportServiceForm.invalid || this.dateInitial === undefined || this.dateFinal === undefined) {
      return;
    }
    this.serviceReportService.createServiceReport(data)
      .subscribe({
        next: (resp)=> {
          Swal.fire('Servicio Creado!',` Servicio ${service} creado con exíto`, 'success');
          this.router.navigateByUrl(`/dashboard`);
        },
        error(err) {
            console.log(err);
        },
      })
      
  }

  fechaInitial(date:number){
    this.dateInitial = date;
  }
  
  fechaFinal(date:number){
    this.dateFinal = date;
  }

  invalidFieldId(field:string):boolean{
    return (this.reportServiceForm.get(field)?.invalid && this.formSubmitted)?true:false;
  }

  invalidFieldService(field:string):boolean{
    return (this.reportServiceForm.get(field)?.invalid && this.formSubmitted)?true:false;
  }
  
  invalidFieldDateInit():boolean{
    return (this.dateInitial === undefined && this.formSubmitted)?true:false;
  }

  invalidFieldDateFinal():boolean{
    return (this.dateFinal === undefined && this.formSubmitted)?true:false;
  }

}
