import { Component, inject, linkedSignal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { CountrySearchInput } from '../../components/country-search-input/country-search-input';
import { CountryList } from '../../components/country-list/country-list';

@Component({
  selector: 'by-country-page',
  imports: [CountrySearchInput, CountryList],
  templateUrl: './by-country-page.html',
})
export class ByCountryPage {
  countryService = inject(CountryService);

  activateRoute = inject(ActivatedRoute);
  router = inject(Router);

  queryParam = this.activateRoute.snapshot.queryParamMap.get('query') ?? '';
  query = linkedSignal<string>(() => this.queryParam);

  countryResource = rxResource({
    request: () => ({ query: this.query() }),
    loader: ({ request }) => {
      if (!request.query) return of([]);

      this.router.navigate(['/country/by-country'], {
        queryParams: { query: request.query },
      });

      return this.countryService.searchByCountry(request.query);
    },
  });
}
