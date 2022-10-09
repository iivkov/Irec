import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recycling } from '../interfaces/recycling'; 
const baseUrl = 'http://localhost:8079/api/recyclings';

@Injectable({
  providedIn: 'root'
})
export class RecyclingService {
  constructor(private http: HttpClient) { }
  getAll(): Observable<Recycling[]> {
    return this.http.get<Recycling[]>(baseUrl);
  }
  get(id: any): Observable<Recycling> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
}
