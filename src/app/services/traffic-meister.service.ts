import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of, throwError } from 'rxjs';
import { Vehicle } from '@app/interfaces/vehicle';
import { Subject } from 'rxjs';
import { retry, mergeMap, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

/**
 * @name TrafficMeisterService {service}
 * @description Call api a store Json array data
 */
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
  trafficFiltered: Vehicle[] | any[] = [];

  /**
   * store  array json Object
   */
  traffic: Vehicle[] | any[] = [];


  /** handling backend response */
  errorResonse: {error: string};
  /** BehaviorSubject emit when the data is loaded */
  loadFinished = new BehaviorSubject<boolean>(false);
  /** BehaviorSubject {loadFinished} Observable */
  loadFinished$ = this.loadFinished.asObservable();
  /** url backend API */
  private url = `${environment.apiUrl}:${environment.port}`;

  constructor(private http: HttpClient) {
    this.getTypes()
      .pipe(
        mergeMap(data => {
          if (data.length === 0) {
            return throwError('Error!');
          }
          return of(data);
        }),
        retry(2),
        catchError(err => {
          return throwError(err);
        }),
        catchError(err => {
          this.errorResonse = { error: 'somethings is wrong with the server' };
          return of([]);
        })
      )
      .subscribe(type => {

        this.trafficFiltered = this.traffic = type;
        this.loadFinished.next(true);
      },
        err => console.log('HTTP Error', err));
  }

  /**
   * get the Array Json from Server method GET
   */
  getTypes(): Observable<Vehicle[] | any[]> {
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
   * @param colorArray string[]
   */
  functionFindColor(colorArray: any[] | Vehicle[]): number {
    const intersection = colorArray.filter(element => this.seletecColor.map((x: Vehicle | any) => x.color).includes(element));
    return intersection.length === 1 ? 0 : -1;
  }

  /**
   * Kill subcriptions
   * @param s$ Subject<boolean>
   */
  detroySubcription(s$: Subject<boolean>) {
    s$.next();
    s$.complete();
  }

}
