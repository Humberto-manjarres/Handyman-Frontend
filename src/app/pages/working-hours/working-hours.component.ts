import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SearchHoursWorking } from 'src/app/models/searchHoursWorking';
import { HoursWorkingService } from 'src/app/services/hours-working.service';
import { HoursWorking } from '../../models/hoursWorking';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-working-hours',
  templateUrl: './working-hours.component.html',
  styleUrls: ['./working-hours.component.css']
})
export class WorkingHoursComponent implements OnInit, OnDestroy{
  public formSubmitted:boolean = false;
  public hoursWorking:HoursWorking;
  public weeks:string[] = [];
  public workingHoursSubcribe: Subscription;

  public hoursWorkingForm = this.fb.group({
    id: ['', Validators.required],
    week: ['', Validators.required]
  })

  constructor(private fb:FormBuilder, private service: HoursWorkingService){}

  ngOnDestroy(): void {
    //this.workingHoursSubcribe.unsubscribe();
  }

  ngOnInit(): void {
    this.getSemanas();
  }

  getHoursWorking(){
    const {id, week} = this.hoursWorkingForm.value;
    const data: SearchHoursWorking = {
      idTechnical: id,week
    }
    this.formSubmitted = true;
    if (this.hoursWorkingForm.valid) {
    this.service.getHoursWorking(data)
        .subscribe({
          next: (resp:HoursWorking)=> {
            console.log('desde component TS --> ',resp);
            this.hoursWorking = resp;
          },
          error: (err)=>{
            console.log('error -> ',err);
            Swal.fire('Ups!',` La identificación <strong>${id}</strong> no tiene horas laboradas`, 'error');
            this.hoursWorking = null;
          }
        })  
    }
  }

  invalidField(field:string):boolean{
    return (this.hoursWorkingForm.get(field)?.invalid && this.formSubmitted)?true:false;
  }
  invalidFieldSelections(fieldSelections:string):boolean{
    return (this.hoursWorkingForm.get(fieldSelections)?.invalid && this.formSubmitted)?true:false;
  }
  
  /* utilizar {Json Server} */
  getSemanas(){
    this.weeks = ['SEMANA01','SEMANA02','SEMANA03','SEMANA04','SEMANA05','SEMANA06','SEMANA37'];    
  }


}
