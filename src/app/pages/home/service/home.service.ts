import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UrlApli } from 'src/assets/urlConfig';
import { retry, catchError, map, switchMap } from 'rxjs/operators';
import { RequestResult } from 'src/app/models/requestResult';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private handleError: any;
  private urlApi = UrlApli;
  constructor(
    private http: HttpClient
  ) { }
  _getAuthors() {    
    return this.http.get<RequestResult<any[]>>(`${this.urlApi}Books`)                                                                
      .pipe(retry(0), catchError(this.handleError), map((response) => {
        return response;
      }));
  }
}
