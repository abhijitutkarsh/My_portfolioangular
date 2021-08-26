import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver) {}

  cardLayout = this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet]).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,

          chart: { cols: 1, rows: 1 },
          table: { cols: 3, rows: 3 },
          final: { cols: 2, rows: 3 },
         aj: { cols: 1, rows: 2},
        };
      }

      return {
        columns: 4,

        chart: { cols: 1, rows: 1 },
        table: { cols: 1, rows: 3 },
        final: { cols: 1, rows: 3 },
        aj: { cols: 1, rows: 2 }

      };
    })
  );

      // tslint:disable-next-line:member-ordering
      defaultElevation = 2;
      // tslint:disable-next-line:member-ordering
      raisedElevation = 8;

      titles = ['title1', 'title2', 'title3', 'title4', 'title5'];
      titleSelected: any;

      name = 'Angular';

  // tslint:disable-next-line:typedef
  ngOnInit() {

      }

      // tslint:disable-next-line:typedef
      select(title: any) {
        this.titleSelected = title;
      }
    }
