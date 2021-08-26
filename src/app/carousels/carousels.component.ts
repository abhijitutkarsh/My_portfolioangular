import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousels',
  templateUrl: './carousels.component.html',
  styleUrls: ['./carousels.component.css'],
  providers: [NgbCarouselConfig] ,
})
export class CarouselsComponent implements OnInit {


  ngOnInit(): void {
  }
   // tslint:disable-next-line:member-ordering

  // tslint:disable-next-line:member-ordering
  images = ['/My_portfolioangular/assets/c++.jpeg',  '/My_portfolioangular/assets/aws.jpeg', '/My_portfolioangular/assets/cloud.jpeg', '/My_portfolioangular/assets/algorithmictoolbox.jpeg' , '/My_portfolioangular/assets/compititive.jpeg', '/My_portfolioangular/assets/data_wrangling.jpeg' , '/My_portfolioangular/assets/dividenconquer.jpeg', '/My_portfolioangular/assets/sql.jpeg' , '/My_portfolioangular/assets/cybersecurity.jpeg' , '/My_portfolioangular/assets/comutervision.jpeg'  ];
// tslint:disable-next-line:eoflineE:\angularportfolio\my-app\src\assets\cybersecurity.jpeg

constructor(config: NgbCarouselConfig) {
  config.interval = 10000;
  config.wrap = false;
  config.keyboard = false;
  config.pauseOnHover = false;
}
}
