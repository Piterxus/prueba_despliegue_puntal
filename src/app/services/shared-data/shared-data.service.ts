import { Injectable } from '@angular/core'; // Decorador que permite inyectar dependencias al servicio
import { BehaviorSubject, Observable } from 'rxjs'; // Importación de módulos necesarios para manejo de observables

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private dataMap = new Map<string, BehaviorSubject<any>>(); // Mapa que almacena los datos compartidos entre componentes
  // Método para almacenar datos en el mapa de datos compartidos
  setData(key: string, data: any) {
    

    let dataSubject = this.dataMap.get(key); // Se obtiene el valor del mapa de datos compartidos

    if (!dataSubject) {
      dataSubject = new BehaviorSubject<any>(null); // Si no existe, se crea un nuevo BehaviorSubject (tipo de sujeto observable que mantiene y emite el valor más reciente a todos sus observadores)
      this.dataMap.set(key, dataSubject); // Se almacena el nuevo BehaviorSubject en el mapa de datos compartidos
    }

    dataSubject.next(data); // Se emite el valor del BehaviorSubject
  }

  // Método para obtener datos del mapa de datos compartidos
  getData(key: string): Observable<any> {
    const dataSubject = this.dataMap.get(key); // Se obtiene el valor del mapa de datos compartidos

    if (!dataSubject) {
      console.error(`Error: No data found for key ${key}`);
      return new BehaviorSubject<any>(null).asObservable();
    } // Si no existe, se emite un error

    return dataSubject.asObservable(); // Se emite el valor del BehaviorSubject
  }

  constructor() { }
}
