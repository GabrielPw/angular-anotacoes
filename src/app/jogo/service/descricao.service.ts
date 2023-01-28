import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Descricao } from '../descricao';

@Injectable({
  providedIn: 'root'
})
export class DescricaoService {

  constructor(private http: HttpClient) { }

  getData(endpoint:string){

    let url = 'http://localhost:8080/' + endpoint;
    console.log("url passado: " + url);
    return this.http.get<Descricao[]>(url);
  }
}
