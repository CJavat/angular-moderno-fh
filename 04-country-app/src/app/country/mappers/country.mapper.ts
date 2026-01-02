import type { Country } from '../interfaces/country.interface';
import type { RESTCountry } from '../interfaces/rest-countries.interface';

export class CountryMapper {
  static mapRestCountryToCountry(country: RESTCountry): Country {
    return {
      cca2: country.cca2,
      flag: country.flag,
      flagSvg: country.flags.svg,
      name: country.translations['spa'].common ?? 'No Spanish Name',
      capital: country.capital?.join(','),
      population: country.population,
      region: country.region,
      subRegion: country.subregion,
    };
  }

  static mapRestCountriesToCountries(countries: RESTCountry[]): Country[] {
    return countries.map(this.mapRestCountryToCountry);
  }
}
