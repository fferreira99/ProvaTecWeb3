import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class CatService {
  private apiUrl = 'https://freetestapi.com/api/v1/cats';

  constructor(private http: HttpClient) {}
  getCats(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Erro na requisição à API:', error);
        throw error;
      })
    );  
}
}