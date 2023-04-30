import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ServiceReport } from '../models/serviceRepost';
import { map } from 'rxjs';
const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class ServiceReportService {

  constructor(private http:HttpClient) { }

  createServiceReport(data:ServiceReport){
    console.log('data --> ',data);
    return this.http.post(`${base_url}/service`,data);
  }
}
