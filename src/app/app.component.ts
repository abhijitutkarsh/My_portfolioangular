import { Component, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';
import { Container, Main } from 'ng-particles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class AppComponent {
  title = 'my-app';
  // tslint:disable-next-line:member-ordering
  id = 'tsparticles';

  /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
  // tslint:disable-next-line:member-ordering
  particlesUrl = 'http://foo.bar/particles.json';

  /* or the classic JavaScript object */
  particlesOptions = {
      background: {
          color: {
              value: '#0d47a1'
          }
      },
      fpsLimit: 60,
      interactivity: {
          detectsOn: 'canvas',
          events: {
              onClick: {
                  enable: true,
                  mode: 'push'
              },
              onHover: {
                  enable: true,
                  mode: 'repulse'
              },
              resize: true
          },
          modes: {
              bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40
              },
              push: {
                  quantity: 4
              },
              repulse: {
                  distance: 200,
                  duration: 0.4
              }
          }
      },
      particles: {
          color: {
              value: '#ffffff'
          },
          links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1
          },
          collisions: {
              enable: true
          },
          move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 6,
              straight: false
          },
          number: {
              density: {
                  enable: true,
                  value_area: 800
              },
              value: 80
          },
          opacity: {
              value: 0.5
          },
          shape: {
              type: 'circle'
          },
          size: {
              random: true,
              value: 5
          }
      },
      detectRetina: true
  };

  // tslint:disable-next-line:typedef
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  particlesLoaded(container: Container): void {
      console.log(container);
  }

  particlesInit(main: Main): void {
      console.log(main);

      // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
  }
}
