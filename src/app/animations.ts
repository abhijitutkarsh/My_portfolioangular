import {
    animation, trigger, animateChild, group,
    transition, animate, style, query
  } from '@angular/animations';
  // tslint:disable-next-line:no-trailing-whitespace
  
export const transAnimation = animation([
    style({
      height: '{{ height }}',
      opacity: '{{ opacity }}',
      backgroundColor: '{{ backgroundColor }}'
    }),
    animate('{{ time }}')
  ]);

  // Routable animations
export const slideInAnimation =
    trigger('routeAnimations', [
      transition('HomePage <=> AboutPage,HomePage <=> ProjectPage, HomePage <=> SkillsPage , ProjectPage <=> SkillsPage , HomePage <=> ExperiencePage,ProjectPage <=> ExperiencePage , HomePage <=> EducationPage,ProjectPage <=> EducationPage ,HomePage <=> ContactPage,ProjectPage <=> ContactPage, EducationPage <=> AboutPage,ProjectPage <=> AboutPage,EducationPage <=> SkillsPage, EducationPage <=> ExperiencePage,ExperiencePage <=> SkillsPage, EducationPage <=> ContactPage,ContactPage <=> SkillsPage,ContactPage <=> ProjectPage, ExperiencePage <=> AboutPage, ExperiencePage <=> ContactPage,SkillsPage <=> AboutPage, ContactPage <=> AboutPage', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ]),
        query(':enter', [
          style({ left: '-100%' })
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('300ms ease-out', style({ left: '100%' }))
          ]),
          query(':enter', [
            animate('300ms ease-out', style({ left: '0%' }))
          ])
        ]),
        query(':enter', animateChild()),
      ]),
      transition('* <=> FilterPage', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ]),
        query(':enter', [
          style({ left: '-100%' })
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('200ms ease-out', style({ left: '100%' }))
          ]),
          query(':enter', [
            animate('300ms ease-out', style({ left: '0%' }))
          ])
        ]),
        query(':enter', animateChild()),
      ])
    ]);


  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */
