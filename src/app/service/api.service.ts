import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

//TODO: 
//Will remove this fake API when I have my DB created to 
//call my actual items

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http : HttpClient) { }

  getProducts() {
    return this.http.get<any>("https://fakestoreapi.com/products/")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
