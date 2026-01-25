import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
})
export class HomePage {
  constructor() {
    console.log('Constructor llamado.');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }
  ngOnChanges() {
    console.log('ngOnChanges');
  }
  ngDoCheck() {
    console.log('ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('ngAfterContent');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContent');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewIni');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewCheked');
  }
}
