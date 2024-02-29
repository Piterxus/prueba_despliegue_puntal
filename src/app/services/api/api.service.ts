import { Injectable } from '@angular/core'; // Decorador que permite inyectar dependencias al servicio
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Importación de módulos necesarios para petición HTTP
import { Observable, tap } from 'rxjs'; // Importación de módulos necesarios para manejo de observables
// En este servicio se definen los métodos que se utilizarán para realizar peticiones a la API. 
//Se importa el módulo HttpClient para realizar peticiones HTTP y el módulo Observable para manejar las respuestas de las peticiones. 
//También se importa el módulo tap para realizar operaciones con la respuesta de la petición.
//En todas estas peticionas son manejadas en el backend. en este caso emdiante el framework de Laravel.
@Injectable({
  providedIn: 'root'
}) // Decorador que permite inyectar dependencias al servicio
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/api/v1/'; // URL de la API a la que se realizarán las peticiones
  constructor(private http: HttpClient) { } // Inyección de dependencia HttpClient. En este caso, se inyecta el servicio HttpClient


  //de la api cogemos la cantidad de plazas base hay
  getCantidadPB(): Observable<any> {
    const urls = `${this.apiUrl}${'plazaBase/cantidad'}`;
    return this.http.get(urls);
  }
  //de la api cogemos la cantidad de transito hay
  getCantidadTR(): Observable<any> {
    const urls = `${this.apiUrl}${'transito/cantidad'}`;
    return this.http.get(urls);
  }

  //de la api calculamos el porcentaje de ocupacion que hay
  getPorcentajeOcupacion(): Observable<any> {
    const urls = `${this.apiUrl}${'plaza/porcentaje'}`;
    return this.http.get(urls);
  }

  //de la api cogemos la cantidad de plazas base hay disponibles
  getPBdisponibles(): Observable<any> {
    const urls = `${this.apiUrl}${'plaza/pbdisponibles'}`;
    return this.http.get(urls);
  }

  //de la api cogemos la cantidad de plazas base hay en mantenimiento
  getPBmantenimiento(): Observable<any> {
    const urls = `${this.apiUrl}${'plaza/pbmantenimiento'}`;
    return this.http.get(urls);
  }


  //de la api cogemos la cantidad de transito hay disponibles
  getTRdisponibles(): Observable<any> {
    const urls = `${this.apiUrl}${'plaza/trdisponibles'}`;
    return this.http.get(urls);
  }

  //de la api cogemos la cantidad transito hay en mantenimiento
  getTRmantenimiento(): Observable<any> {
    const urls = `${this.apiUrl}${'plaza/trmantenimiento'}`;
    return this.http.get(urls);
  }

  //de la api cogemos la cantidad de embarcaciones hay
  getCantidadEmb(): Observable<any> {
    const urls = `${this.apiUrl}${'embarcacion/cantidad'}`;
    return this.http.get(urls);
  }

  //de la api cogemos el pais con mas embarcaciones 
  getPaisConMas(): Observable<any> {
    const urls = `${this.apiUrl}${'embarcacion/pais'}`;
    return this.http.get(urls);
  }

  //de la api cogemos el tipo comun de embarcaciones 
  getEmbcomun(): Observable<any> {
    const urls = `${this.apiUrl}${'embarcacion/tipocomun'}`;
    return this.http.get(urls);
  }

//de la api cogemos la estancia media de plazas base
  getEstancia(): Observable<any> {
    const urls = `${this.apiUrl}${'plazaBase/estancia'}`;
    return this.http.get(urls);
  }

//de la api cogemos la estancia media de transitos
  getEstancia2(): Observable<any> {
    const urls = `${this.apiUrl}${'transito/estancia'}`;
    return this.http.get(urls);
  }

  //de la api cogemos la ocupacion de los amarres
  getDatosOcu(): Observable<any> {
    const urls = `${this.apiUrl}${'plaza/datosOcu'}`;
    return this.http.get(urls);
  }

//de la api cogemos los tipos de embarcaciones
  getTiposEmbarcaciones(): Observable<any> {
    const urls = `${this.apiUrl}${'embarcacion/tipos'}`;
    return this.http.get(urls);
  }

  getGuardiaCivil():Observable<any>
  {
    const urls = `${this.apiUrl}${'transito/guardia'}`;
    return this.http.get(urls);
  }


//de la api cogemos los tipos de embarcaciones
getTablaPB(): Observable<any> {
  const urls = `${this.apiUrl}${'plazaBase/paratabla'}`;
  return this.http.get(urls);
}

getEmbarcaciones(): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}embarcacion`);
}

getTitularEmbarcacion(embarcacionId: number): Observable<any[]> {
  const url = `${this.apiUrl}embarcacion/${embarcacionId}/titular`;
  console.log(url);
  return this.http.get<any>(url);
}


postAdministrativoAmarre(id: any, data: any): Observable<any> {
  const url = `${this.apiUrl}plazaBase/${id}/administrativoyAmarre`;
  console.log(url);
  console.log(data);
  return this.http.post(url, data);
}

postAlquiler(id: any, data: any): Observable<any> {
  const url = `${this.apiUrl}plazaBase/alquiler/${id}`;
  console.log(url);
  return this.http.post(url, data);
}


putDisponibleOcupado(id: any, data?: any): Observable<any> {
  const url = `${this.apiUrl}plaza/${id}/actualizaEstadoOcupado`;
  console.log(url);
  return this.http.put(url, data);
}


putEli(id: any, data?: any): Observable<any> {
  const url = `${this.apiUrl}plazaBase/${id}/eli`;
  console.log(url);
  return this.http.put(url, data);
}


putOcupadoDisponible(id: any, data?: any): Observable<any> {
  const url = `${this.apiUrl}plaza/${id}/actualizaEstadoDisponible`;
  console.log(url);
  return this.http.put(url, data);
}

putActuaFin(id: any, data: any): Observable<any> {
  const url = `${this.apiUrl}plazaBase/${id}/actuFin`;
  console.log(url);
  return this.http.put(url, data);
}



getInstalaciones(): Observable<any[]> {
  const url = `${this.apiUrl}instalacion`;
  console.log(url);
  return this.http.get<any[]>(url);
}

getPantalanes(instalacionId: number): Observable<any> {
  const url = `${this.apiUrl}instalacion/${instalacionId}/pantalanes`;
  console.log(url);
  return this.http.get<any>(url);
}

getAmarres(pantalanId: number): Observable<any> {
  const url = `${this.apiUrl}pantalan/${pantalanId}/amarres`;
  console.log('GET request to:', url);
  return this.http.get<any>(url);
}

getAmarresTransito(pantalanId: number): Observable<any> {
  const url = `${this.apiUrl}pantalan/${pantalanId}/amarrestr`;
  console.log('GET request to:', url);
  return this.http.get<any>(url);
}



  getPlazas(): Observable<any> {
    const url = `${this.apiUrl}${"plaza/disponibles"}`;
    return this.http.get(url)
  }

  leidoCreate(data:any):Observable<any>
  {
    const url = `${this.apiUrl}${"guardiaCivil/leido"}`;
    console.log(data);
    return this.http.get(url,data)
    .pipe(
      tap(response => console.log('Respuesta del servicio:', response))
    );
    
  }

  getAll(entity: string): Observable<any> {
    const url = `${this.apiUrl}${entity}`;
    return this.http.get(url);
  }

  // Método que realiza una petición GET a la API para obtener un recurso específico.
  // Recibe como parámetro el nombre de la entidad ("entity") y los datos a enviar en la petición.
  add(entity: string, data: any): Observable<any> {
    // URL a la API a la que se realizará la petición cone el nombre de la entidad.
    const url = `${this.apiUrl}${entity}`;
    // Se realiza la petición POST a la API con la URL y los datos a enviar.
    return this.http.post(url, data)
      .pipe(
        tap(response => console.log('Respuesta del servicio:', response))
      ); // Se utiliza el operador pipe para encadenar operadores. En este caso, se utiliza el operador tap para imprimir en consola la respuesta del servicio.
  }

  // Método que realiza una petición PUT a la API para actualizar un recurso específico.
  // Recibe como parámetro el ID del recurso a actualizar, el nombre de la entidad ("entity") y los datos a enviar en la petición.
  // Por coherencía, debería estar ordenado así: entity, id, data. A tener en cuenta al refactorizar.
  update(id: any, entity: string, data: any): Observable<any> {

    // Se define el boundary que se utilizará en el encabezado de la petición. Lo fuerzo
    // ya que la actualización de imagenes da problemas con el boundary por defecto.
    const boundary = '----WebKitFormBoundaryCPvD7XF6kal2o4y9'; // Usar el mismo boundary que en el segundo encabezado
    // Se definen los encabezados de la petición
    const headers = new HttpHeaders({
      'Content-Type': `multipart/form-data; boundary=${boundary}`,
      'enctype': 'multipart/form-data'
    });
    // URL a la API a la que se realizará la petición con el nombre de la entidad y el ID del recurso.
    const url = `${this.apiUrl}${entity}/${id}`;

    // Se realiza la petición PUT a la API con la URL y los datos a enviar.
    return this.http.put(url, data);

  }


  delete(id: any, entity: string): Observable<any> {
    // URL a la API a la que se realizará la petición con el nombre de la entidad y el ID del recurso.
    const url = `${this.apiUrl}${entity}/${id}`;
    // Se realiza la petición DELETE a la API con la URL.
    return this.http.delete(url);
  }

}
