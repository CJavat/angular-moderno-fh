import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, delay, map, Observable, throwError } from 'rxjs';
import { CountryMapper } from '../mappers/country.mapper';

import type { RESTCountry } from '../interfaces/rest-countries.interface';
import type { Country } from '../interfaces/country.interface';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);

  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLowerCase();

    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`).pipe(
      map((resp) => CountryMapper.mapRestCountriesToCountries(resp)),
      catchError((error) =>
        throwError(
          () => new Error(`No se pudo obtener países con ese query: ${query}`)
        )
      )
    );
  }

  searchByCountry(query: string): Observable<Country[]> {
    query = query.toLowerCase();

    return this.http.get<RESTCountry[]>(`${API_URL}/name/${query}`).pipe(
      map((resp) => CountryMapper.mapRestCountriesToCountries(resp)),
      delay(2500),
      catchError((error) =>
        throwError(
          () => new Error(`No se pudo obtener países con ese query: ${query}`)
        )
      )
    );
  }

  searchCountryByAlphaCode(code: string): Observable<Country | undefined> {
    code = code.toLowerCase();

    return this.http.get<RESTCountry[]>(`${API_URL}/alpha/${code}`).pipe(
      map((resp) => CountryMapper.mapRestCountriesToCountries(resp)),
      map((countries) => countries.at(0)),
      catchError((error) =>
        throwError(
          () => new Error(`No se pudo obtener países con ese código: ${code}`)
        )
      )
    );
  }
}
