import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { SharedDataService } from '../shared-data/shared-data.service';

@Injectable({
  providedIn: 'root'
})
//llamada a la api con el id de transito seleccionado
export class ApiTripulantesService {
  transitoId :any;
  private apiUrl = '<http://127.0.0.1:8000/api/v1/tripulante/>';
  constructor(private http: HttpClient,     private sharedDataService: SharedDataService,
    ) { }
  getAll(): Observable<any> {
    this.sharedDataService.getData("transitoSeleccionada").subscribe(data => {
      this.transitoId=data.Amarre_id;
      
    });
    
    const url = `http://127.0.0.1:8000/api/v1/tripulante/transito/${this.transitoId}>`;
    console.log(url);
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
