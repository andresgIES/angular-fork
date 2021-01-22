import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_PUBLIC_KEY = '&apikey=3de3aab2bd3785577125d62fd8940dfe';
const TIME_OUT = '&ts=1';
const HASH_md5 = '&hash=c27df0548798891baae588f1111f2577';
const RUTA_BASE = 'https://gateway.marvel.com';
const PERSONAJES = '/v1/public/characters?nameStartsWith=';
const COMICS = '/v1/public/comics?titleStartsWith=';
const SERIES = '/v1/public/series?titleStartsWith=';

const headersjson = new HttpHeaders({ 'Content-Type': 'application/json' });

@Injectable({
  providedIn: 'root'
})

export class MarvelService {

  constructor(private http: HttpClient) { }

  public getPersonaje(personaje: string): Observable<any> {
    return this.http.get<any>(RUTA_BASE.concat(PERSONAJES)
      .concat(personaje).concat(TIME_OUT)
      .concat(API_PUBLIC_KEY).concat(HASH_md5), { headers: headersjson });
  }

  public getComics(comic: string): Observable<any> {
    return this.http.get<any>(RUTA_BASE.concat(COMICS)
      .concat(comic).concat(TIME_OUT)
      .concat(API_PUBLIC_KEY).concat(HASH_md5), { headers: headersjson });
  }

  public getSeries(serie: string): Observable<any> {
    return this.http.get<any>(RUTA_BASE.concat(SERIES)
      .concat(serie).concat(TIME_OUT)
      .concat(API_PUBLIC_KEY).concat(HASH_md5), { headers: headersjson });
  }


}