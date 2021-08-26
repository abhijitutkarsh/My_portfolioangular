import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  // config: any;
  // projects = [
  //   {
  //     id: 1,
  //     title: 'Read data from Google spreadsheet in Angular',
  //     desc: '',
  //     livedemo: 'https://mehulk05.github.io/MyShop/#/',
  //     githurl: 'https://github.com/mehulk05/MyShop',
  //     mediumlink: 'https://itnext.io/read-data-from-google-spreadsheet-in-angular-209ee74b6cb4',
  //     imgUrl: '../../assets/img/image.jpg',
  //     tech: 'Angular 10 , Google SpreadsheetApi'
  //   },

  //   {
  //     id: 2,
  //     title: 'Blog App Using MERN Stack',
  //     desc: '',
  //     livedemo: 'https://mehulk05.github.io/Blogapp-using-MERN/#/',
  //     githurl: 'https://github.com/mehulk05/Blogapp-using-MERN',
  //     mediumlink: 'https://itnext.io/blog-app-using-mern-stack-b0b4d69d7ea1',
  //     imgUrl: '../../assets/img/image.jpg',
  //     tech: 'React, Node, MongoDB, Express'
  //   },


  //   {
  //     id: 3,
  //     title: 'CRUD operation using MEAN stack',
  //     desc: '',
  //     livedemo: 'https://mehulk05.github.io/Blog-using-mean/#/',
  //     githurl: 'https://github.com/mehulk05/Blog-using-mean',
  //     mediumlink: 'https://itnext.io/crud-operation-using-mean-stack-7dfa2f51ec8c',
  //     imgUrl: '../../assets/img/image.jpg',
  //     tech: 'Angular 10, Node, MongoDB, Express'
  //   },

  //   {
  //     id: 4,
  //     title: 'Multiroom Chat Application in Node JS',
  //     desc: '',
  //     livedemo: 'https://chatapp-using-node.herokuapp.com/',
  //     githurl: 'https://github.com/mehulk05/Chat-app-using-Nodejs',
  //     mediumlink: 'https://medium.com/weekly-webtips/building-a-multiroom-chat-application-in-node-js-8a8adca5acf2',
  //     imgUrl: '../../assets/img/image.jpg',
  //     tech: 'Node JS,Socket IO'
  //   },








  // ];
  // constructor() { }

  // // tslint:disable-next-line:typedef
  // ngOnInit() {


  // }
  // }
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



