import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrafficMeisterService {

  private url = `${environment.apiUrl}:${environment.port}`;

  constructor(private http: HttpClient) {

  }


  getTypes(): Observable<any[]> {
    const headers = new HttpHeaders({
    });
    return this.http.get<any[]>(`${this.url}/types`, {  });
  }

}
