import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailProduitService {
  baseUrl="https://localhost:44385/api/produits";
  constructor(private http:HttpClient) { }
  getById(Id):Observable<any> {
    const url=`${this.baseUrl}/${Id}`;
    return this.http.get(url);
}
}
