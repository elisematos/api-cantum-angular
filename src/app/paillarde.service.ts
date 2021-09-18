import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaillardeService {

  constructor(private http: HttpClient) { }

  getPaillardes(): Observable<any> {
    return this.http.get<any>(`https://localhost:8080/api/paillardes`);
  }
}
