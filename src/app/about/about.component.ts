import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private router: Router
  ) { }
  title = 'Olá, meu nome é Braian ';
  paragraph: string = 'Sou formado em Tecnologia em Análise e Desenvolvimento de Sistemas pela ' +
   'faculdade Anhanguera de Sorocaba, meu objetivo é me tornar desenvolvedor full-stack.';

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

}
