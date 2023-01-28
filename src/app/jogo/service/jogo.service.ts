import { Jogo } from './../jogo';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JogoService {

  constructor(private http: HttpClient) { }

  getData(endpoint:string){

    let url = 'http://localhost:8080/' + endpoint;
    console.log("url passado: " + url);
    return this.http.get<Jogo>(url);
  }
}

