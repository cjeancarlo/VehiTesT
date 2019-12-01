import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of, throwError } from 'rxjs';
import { Vehicle } from '../interfaces/vehicle';
import { Subject } from 'rxjs';
import { takeUntil, retry, mergeMap, map } from 'rxjs/operators';
import { verifyHostBindings } from '@angular/compiler';
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
  trafficFiltered: Vehicle[] = [];

  /**
   * store  array json Object
   */
  traffic: Vehicle[] = [];

  loadFinished = new BehaviorSubject<boolean>(false);
  loadFinished$ = this.loadFinished.asObservable();

  private url = `${environment.apiUrl}:${environment.port}`;

  constructor(private http: HttpClient) {
    this.getTypes()
      .pipe(
        mergeMap(data => {
          if (data.length === 0 ) {
            return throwError('Error!');
          }
          return of(data);
        }),
        retry(2)
      )
      .subscribe(type => {

        this.trafficFiltered = this.traffic = type;
        this.loadFinished.next(true);
      },
        error => console.log(`${error}: Retried 2 times then quit!`));
  }

  /**
   * get the Array Json from Server method GET
   */
  getTypes(): Observable<Vehicle[]> {
    const headers = new HttpHeaders({
    });
    return this.http.get<Vehicle[]>(`${this.url}/types`, {});
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

  /**
   * Kill subcriptions
   * @param s$
   */
  detroySubcription(s$: Subject<boolean>) {
    s$.next();
    s$.complete();
  }

}
