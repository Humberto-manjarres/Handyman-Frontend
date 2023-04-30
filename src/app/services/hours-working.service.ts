import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SearchHoursWorking } from '../models/searchHoursWorking';
const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class HoursWorkingService {
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  constructor(private http:HttpClient) { }

  getHoursWorking(data:SearchHoursWorking){
    const {idTechnical,week} = data;
    return this.http.get(`${base_url}/worked-hours/${idTechnical}/${week}`,{headers: this.httpHeaders});

  }


}
