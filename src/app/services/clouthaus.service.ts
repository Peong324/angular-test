import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/clouthaus.model';

@Injectable({
    providedIn: 'root'
  })

export class ClouthausService {
  private jsonFile = 'assets/data/general.json';
  constructor(private http: HttpClient){}
  getClouthausDataFromFile(): Observable<ApiResponse> {
    console.log('Fetching from:', this.jsonFile);;
    return this.http.get<ApiResponse>(this.jsonFile);
  }

}
