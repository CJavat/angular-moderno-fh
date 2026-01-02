import { Component, inject, linkedSignal, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { CountryList } from '../../components/country-list/country-list';

import type { Region } from '../../interfaces/region.type';
import { ActivatedRoute, Router } from '@angular/router';

function validateQueryParam(queryParam: string) {
  queryParam = queryParam.toLowerCase();

  const validRegions: Record<string, Region> = {
    africa: 'Africa',
    americas: 'Americas',
    asia: 'Asia',
    europe: 'Europe',
    oceania: 'Oceania',
    antarctic: 'Antarctic',
  };

  return validRegions[queryParam] ?? 'Americas';
}

@Component({
  selector: 'by-region-page',
  imports: [CountryList, NgClass],
  templateUrl: './by-region-page.html',
})
export class ByRegionPage {
  countryService = inject(CountryService);

  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') ?? '';

  selectedRegion = linkedSignal<Region>(() =>
    validateQueryParam(this.queryParam)
  );

  regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];

  regionResource = rxResource({
    request: () => ({ selectedRegion: this.selectedRegion() }),
    loader: ({ request }) => {
      if (!request.selectedRegion) return of([]);

      this.router.navigate(['/country/by-region'], {
        queryParams: { query: request.selectedRegion },
      });

      return this.countryService.searchByRegion(request.selectedRegion);
    },
  });
}
