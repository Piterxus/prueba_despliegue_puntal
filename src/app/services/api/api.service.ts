import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/api/v1/';
  constructor(private http: HttpClient) { }
  getAll(entity: string): Observable<any> {
    const url = `${this.apiUrl}${entity}`;
    return this.http.get(url);
  }
  add(entity: string, data: any): Observable<any> {
    const url = `${this.apiUrl}${entity}`;
    return this.http.post(url, data)
      .pipe(
        tap(response => console.log('Respuesta del servicio:', response))
      );
  }
  update(id: any, entity: string, data: any): Observable<any> {


    const url = `${this.apiUrl}${entity}/${id}`;
    console.log('URL:', url);
    console.log('Datos de la embarcación a enviar:', entity);

    return this.http.put(url, data, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }
  delete(id: any, entity: string): Observable<any> {
    const url = `${this.apiUrl}${entity}/${id}`;
    return this.http.delete(url);
  }
}
