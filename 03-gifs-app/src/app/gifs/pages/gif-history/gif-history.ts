import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { GifsService } from '../../services/gifs.service';
import { GifsList } from '../../components/gifs-list/gifs-list';

@Component({
  selector: 'gif-history',
  imports: [GifsList],
  templateUrl: './gif-history.html',
})
export default class GifHistory {
  gifService = inject(GifsService);

  query = toSignal(
    inject(ActivatedRoute).params.pipe(map((paramas) => paramas['query']))
  );

  gifsByKey = computed(() => this.gifService.getHistoryGifs(this.query()));
}
