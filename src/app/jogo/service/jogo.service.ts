import { Jogo } from './../jogo';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JogoService {

  url_base = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }

  getData(endpoint:string){

    let url = this.url_base + endpoint;
    console.log("url passado: " + url);
    return this.http.get<Jogo>(url);
  }

  postData(endpoint:string, body:any){
    const httpOptions = {
      headers: new HttpHeaders({ 'Accept': 'application/json', 'Content-Type': 'application/json' })
    };
  

    let url = this.url_base + endpoint;
    console.log("url passado: " + url);

    console.log("\n\n Body passado : ", body);
    return this.http.post<Jogo>(url, body).subscribe(res => {
      console.log("\n\nAPI POST: ", res, httpOptions);
    });
  }
}

