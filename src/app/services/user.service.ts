import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
// const API_URL = 'http://localhost:8079/api/test/';
const baseUrl = 'http://localhost:8079/api/users/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}
  // getPublicContent(): Observable<any> {
  //   return this.http.get(API_URL + 'all', { responseType: 'text' });
  // }
  // getUserBoard(): Observable<any> {
  //   return this.http.get(API_URL + 'user', { responseType: 'text' });
  // }
  
  // getConsumerPanel(): Observable<any> {
  //   return this.http.get(API_URL + 'consumer', { responseType: 'text' });
  // }
  // getRecyclerPanel(): Observable<any> {
  //   return this.http.get(API_URL + 'recycler', { responseType: 'text' });
  // }
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(baseUrl);
  }
  get(id: any): Observable<User> {
    return this.http.get(`${baseUrl}/${id}`);
  }


}