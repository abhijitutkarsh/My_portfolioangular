import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousels',
  templateUrl: './carousels.component.html',
  styleUrls: ['./carousels.component.css']
})
export class CarouselsComponent implements OnInit {


  ngOnInit(): void {
  }
   // tslint:disable-next-line:member-ordering
   xyz = true;
  // tslint:disable-next-line:member-ordering
  images = [
    {title: 'First Slide', short: 'First Slide Short', src: 'https://picsum.photos/id/700/900/500'},
    {title: 'Second Slide', short: 'Second Slide Short', src: 'https://picsum.photos/id/1011/900/500'},
    {title: 'Third Slide', short: 'Third Slide Short', src: 'https://picsum.photos/id/984/900/500'}
  ];
// tslint:disable-next-line:eofline

constructor(config: NgbCarouselConfig) {
  config.interval = 2000;
  config.keyboard = true;
  config.pauseOnHover = true;
}
}
