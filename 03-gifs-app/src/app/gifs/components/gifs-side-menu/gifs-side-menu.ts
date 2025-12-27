import { Component } from '@angular/core';
import { GifsSideHeader } from '../gifs-side-header/gifs-side-header';
import { GifsSideMenuOptions } from '../gifs-side-menu-options/gifs-side-menu-options';

@Component({
  selector: 'gifs-side-menu',
  imports: [GifsSideHeader, GifsSideMenuOptions],
  templateUrl: './gifs-side-menu.html',
})
export class GifsSideMenu {}
