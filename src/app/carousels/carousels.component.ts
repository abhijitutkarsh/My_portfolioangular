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
  images = ['../../assets/c++.jpeg',  '../../assets/aws.jpeg', '../../assets/cloud.jpeg', '../../assets/algorithmictoolbox.jpeg' , '../../assets/compititive.jpeg', '../../assets/data_wrangling.jpeg' , '../../assets/dividenconquer.jpeg', '../../assets/sql.jpeg' , '../../assets/cybersecurity.jpeg' , '../../assets/comutervision.jpeg'  ];
// tslint:disable-next-line:eoflineE:\angularportfolio\my-app\src\assets\cybersecurity.jpeg

constructor(config: NgbCarouselConfig) {
  config.interval = 10000;
  config.wrap = false;
  config.keyboard = false;
  config.pauseOnHover = false;
}
}
