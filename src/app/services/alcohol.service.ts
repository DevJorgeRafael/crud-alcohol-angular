import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Alcohol } from '../models/models';
@Injectable({
  providedIn: 'root'
})
export class AlcoholService {
  // Definir API
  apiURL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  //Http options:
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  // Manejo de errores
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => errorMessage);
  }

  // Metodos CRUD para consumir el API RESTful
  getAlcoholes(): Observable<Alcohol> {
    return this.http.get<Alcohol>(this.apiURL + '/alcoholes')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API delete() method => delete Alcohol
  deleteAlcohol(id: any) {
    return this.http.delete<Alcohol>(this.apiURL + '/alcoholes/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API post() method => Crear Alcohol
  createAlcohol(alcohol: any): Observable<Alcohol> {
    return this.http.post<Alcohol>(this.apiURL + '/alcoholes', JSON.stringify(alcohol), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API get() method => Consulta un Alcohol
  getAlcohol(id: string): Observable<Alcohol> {
    return this.http.get<Alcohol>(this.apiURL + '/alcoholes/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // HttpClient API put() method => Actualiza un Alcohol
  updateAlcohol(id: string, alcohol: any): Observable<Alcohol> {
    return this.http.put<Alcohol>(this.apiURL + '/alcoholes/' + id, JSON.stringify(alcohol), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
}