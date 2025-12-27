import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from '@environments/environment';
// import { environment } from '../../../../environments/environment';

@Component({
  selector: 'gifs-side-header',
  imports: [],
  templateUrl: './gifs-side-header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifsSideHeader {
  envs = environment;
}
