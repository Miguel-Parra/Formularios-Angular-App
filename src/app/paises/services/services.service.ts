import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PaisLarge, PaisSmall } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private _baseUrl: string = 'https://restcountries.com/v3.1/';
  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  get regiones(): string[] {
    return [...this._regiones];
  }

  constructor(
    private _httpClient: HttpClient
  ) { }

  getPaisesPorRegion(region: string): Observable<PaisSmall[]> {
    const url: string = `${this._baseUrl}/region/${region}`
    return this._httpClient.get<PaisSmall[]>(url)
      .pipe(
        map(resp => {
          if (resp.length === 0) return resp;
          return resp.map(elemento => {
            let { name, cca3 } = elemento
            return { name, cca3 }
          })
        })
      )
  }

  getPaisPorCodigo(codigoPais: string): Observable<PaisLarge[] | null> {
    if (codigoPais === '') return of(null);
    const url: string = `${this._baseUrl}/alpha/${codigoPais}`
    console.log(url)
    return this._httpClient.get<PaisLarge[]>(url);
  }

  getPaisPorCodigoSmall(codigoPais: string): Observable<PaisSmall> {
    const url: string = `${this._baseUrl}/alpha/${codigoPais}`
    console.log(url)
    return this._httpClient.get<PaisSmall>(url)
      .pipe(
        map((resp: any) => {
          let paisRetorno: PaisSmall = {
            name: resp[0].name,
            cca3: resp[0].cca3
          }
          return paisRetorno;
        })
      )
  }

  getPaisesPorCodigos(borders: string[] | null): Observable<PaisSmall[]> {
    if (!borders) return of([]);
    const peticiones: Observable<PaisSmall>[] = [];
    borders.forEach(codigo => {
      const peticion = this.getPaisPorCodigoSmall(codigo);
      peticiones.push(peticion);
    })
    return combineLatest(peticiones);
  }
}
