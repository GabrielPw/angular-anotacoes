import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JogoService {

  constructor(private http: HttpClient) { }

  getData(){

    let url = 'http://localhost:8080/jogo/all';
    return this.http.get(url);
  }
}
