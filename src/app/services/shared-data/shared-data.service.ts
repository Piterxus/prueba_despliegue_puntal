import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  // private dataMap = new Map<string, BehaviorSubject<any>>();
  // setData(key: string, data: any) {
  //   console.log(`Setting data for key ${key}:`, data);
  //   if (!this.dataMap.has(key)) {
  //     this.dataMap.set(key, new BehaviorSubject<any>(null));
  //   } 
  //   const dataSubject = this.dataMap.get(key);
  //   if(dataSubject) {
  //     dataSubject.next(data);
  //   }else{
  //     console.log("Error: dataSubject is null");
  //   }
  // }
  // getData(key: string): Observable<any> {
  //   const dataSubject = this.dataMap.get(key);
  //   if(dataSubject) {
  //    this.dataMap.set(key, new BehaviorSubject<any>(null));
  //   }
  //   const updatedDataSubject = this.dataMap.get(key);
  //   return updatedDataSubject?.asObservable() || new BehaviorSubject<any>(null).asObservable();
  // }
  // constructor() { }
  private dataMap = new Map<string, BehaviorSubject<any>>();

  setData(key: string, data: any) {
    console.log(`Setting data for key ${key}:`, data);

    let dataSubject = this.dataMap.get(key);

    if (!dataSubject) {
      dataSubject = new BehaviorSubject<any>(null);
      this.dataMap.set(key, dataSubject);
    }

    dataSubject.next(data);
  }

  getData(key: string): Observable<any> {
    const dataSubject = this.dataMap.get(key);

    if (!dataSubject) {
      console.error(`Error: No data found for key ${key}`);
      return new BehaviorSubject<any>(null).asObservable();
    }

    return dataSubject.asObservable();
  }

  constructor() { }
}
