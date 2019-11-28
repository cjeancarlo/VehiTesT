import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrafficMeisterService {

  seletecTypes: string[] = [];
  seletecBrands: string[] = [];
  seletecColor: string[] = [];

  trafficFiltered: any[] = [];
  traffic: any[] = [];

  loadFinished = new BehaviorSubject<boolean>(null);
  loadFinished$ = this.loadFinished.asObservable();

  private url = `${environment.apiUrl}:${environment.port}`;

  constructor(private http: HttpClient) {

    this.getTypes().subscribe(type => {
      this.trafficFiltered = this.traffic = type;
      this.loadFinished.next(true);
    });

  }

  getTypes(): Observable<any[]> {
    const headers = new HttpHeaders({
    });
    return this.http.get<any[]>(`${this.url}/types`, {});
  }

  filterSelection() {

    console.log(this.seletecTypes,
    this.seletecBrands,
    this.seletecColor)
  

    this.trafficFiltered =  this.traffic
      .filter((x) => {
        return this.seletecTypes.length === 0 ? this.trafficFiltered : this.seletecTypes.indexOf(x.type) === 0;
      })


      .filter((x) => {
        return this.seletecBrands.length === 0 ? this.trafficFiltered : this.seletecBrands.indexOf(x.brand) === 0;
      })


      .filter((x) => {
        return this.seletecColor.length === 0 ? this.trafficFiltered : this.functionFindColor(x.colors) === 0;
      });

  }

functionFindColor( colorArray ): number {
  const intersection = colorArray.filter(element => this.seletecColor.map(x => x['color']).includes(element));
  return intersection.length === 1 ? 0 : -1;
}

}
