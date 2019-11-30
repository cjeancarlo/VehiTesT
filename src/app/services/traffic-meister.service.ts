import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrafficMeisterService {

  /**
   * store the vehicules types user selection
   */
  seletecTypes: string[] = [];
  /**
   * store the vehicules Brands user selection
   */
  seletecBrands: string[] = [];
  /**
   * store the vehicules Color user selection
   */
  seletecColor: string[] = [];

  /**
   * store FILTERED array json Object
   */
  trafficFiltered: any[] = [];
  /**
   * store  array json Object
   */
  traffic: any[] = [];

  loadFinished = new BehaviorSubject<boolean>(false);
  loadFinished$ = this.loadFinished.asObservable();

  private url = `${environment.apiUrl}:${environment.port}`;

  constructor(private http: HttpClient) {
    this.getTypes().subscribe(type => {
      this.trafficFiltered = this.traffic = type;
      this.loadFinished.next(true);
    });

  }
  /**
   * get the Array Json from Server method GET
   */
  getTypes(): Observable<any[]> {
    const headers = new HttpHeaders({
    });
    return this.http.get<any[]>(`${this.url}/types`, {});
  }

  /**
   * method that filter the user selection by type, brand and color;
   */
  filterSelection(): void {

    this.trafficFiltered = this.traffic
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

  /**
   * return 0 if find the color into the array from parameter colorArray if not return -1
   * @param colorArray
   */
  functionFindColor(colorArray: any[]): number {
    const intersection = colorArray.filter(element => this.seletecColor.map(x => x['color']).includes(element));
    return intersection.length === 1 ? 0 : -1;
  }

}
