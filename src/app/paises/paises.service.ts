import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { Paises } from './paises';


@Injectable({
  providedIn: 'root'
})

export class PaisesService {
private apiUrl: string = environment.baseUrl;

constructor(private http: HttpClient) { }

getPaises(): Observable<Paises[]> {
  return this.http.get<Paises[]>(this.apiUrl);
}

}
