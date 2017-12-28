import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { of } from 'rxjs/observable/of';
import { Config } from '../config/config';

@Injectable()
export class DataService {

  private actionUrl: string;

  constructor(private http: HttpClient, private _configuration: Config) {
    this.actionUrl = _configuration.ServerWithApiUrl + '/clients';
  }

  public getAll<T>(): Observable<T> {
    console.log('Getting data from ' + this.actionUrl);
    return this.http.get<T>(this.actionUrl);
  }

  public getOne<T>(id: string): Observable<T> {
    console.log('Fetching One Record of ID:'+id);
    return this.http.get<T>('http://localhost:3000/v1/at/clients/' +id);
  }

  // public add<T>(itemName: string): Observable<T> {
  //   const toAdd = JSON.stringify({ ItemName: itemName });
  //   return this.http.post<T>(this.actionUrl, toAdd);
  // }

  public add<T>(serviceData: any): Observable<T> {
    const toAdd = JSON.stringify(serviceData);
    console.log('POST Url:' + this.actionUrl + ' Data:' + toAdd);
    return this.http.post<T>(this.actionUrl, toAdd);
  }

  public update<T>(id: number, itemToUpdate: any): Observable<T> {
    return this.http
      .put<T>(this.actionUrl + id, JSON.stringify(itemToUpdate));
  }

  public delete<T>(id: number): Observable<T> {
    return this.http.delete<T>(this.actionUrl + id);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}


@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.headers.has('Content-Type')) {
      req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    }

    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
    console.log(JSON.stringify(req.headers));
    return next.handle(req);
  }
}
