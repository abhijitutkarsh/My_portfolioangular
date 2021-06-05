import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousels',
  templateUrl: './carousels.component.html',
  styleUrls: ['./carousels.component.css']
})
export class CarouselsComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  // tslint:disable-next-line:member-ordering
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
// tslint:disable-next-line:eofline
}