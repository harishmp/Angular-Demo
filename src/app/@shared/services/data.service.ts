import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  PokemonList,
  PokemonStats,
  PokemonDetailbyID,
  PokemonMoves,
  PokemonDetailbyName,
} from '../typed';
import { environment } from 'src/environments/environment';

const baseUrl = `${environment['baseUrl']}`;

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  getPokeApiList(limit: number, offset: number): Observable<PokemonList[]> {
    let _url: string = `${baseUrl}?limit=${limit}&offset=${offset}/`;
    return this.httpClient.get<PokemonList[]>(_url).pipe(catchError(this._errorHandler));
  }

  getPokeApiDetail(name: string): Observable<PokemonDetailbyName[]> {
    let _url: string = `https://pokeapi.co/api/v2/pokemon/${name}`;
    return this.httpClient.get<PokemonDetailbyName[]>(_url).pipe(catchError(this._errorHandler));
  }

  getPokemons(id: number): Observable<PokemonDetailbyID[]> {
    let _url: string = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return this.httpClient.get<PokemonDetailbyID[]>(_url).pipe(catchError(this._errorHandler));
  }

  getPokeMoves(url: string): Observable<PokemonMoves[]> {
    return this.httpClient.get<PokemonMoves[]>(url).pipe(catchError(this._errorHandler));
  }

  getPokeStats(url: string): Observable<PokemonStats[]> {
    return this.httpClient.get<PokemonStats[]>(url).pipe(catchError(this._errorHandler));
  }

  private _errorHandler(error: Response) {
    return throwError(error || 'server error');
  }
}
