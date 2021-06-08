import { Component, OnInit } from '@angular/core';

// import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor() { }

  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  ngOnInit(): void {
    console.log('hello');
  }


}
