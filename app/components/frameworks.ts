import Component from '@glimmer/component';

interface FrameworkSignature {}

interface IFramework {
  name: string;
  imgSrc: string;
  link: string;
}

interface IFrameworks {
  backend: IFramework[];
  frontend: IFramework[];
}

export default class Frameworks extends Component<FrameworkSignature> {
  frameworks: IFrameworks = {
    backend: [
      {
        name: 'Fastify',
        imgSrc: '/assets/img/fastify.png',
        link: 'https://fastify.dev/',
      },
      {
        name: 'Spring',
        imgSrc: '/assets/img/springboot.png',
        link: 'https://spring.io/',
      },
      {
        name: 'Express',
        imgSrc: '/assets/img/express.png',
        link: 'https://expressjs.com/',
      },
    ],
    frontend: [
      {
        name: 'React',
        imgSrc: '/assets/img/react.png',
        link: 'https://react.dev',
      },
      {
        name: 'AngularJS',
        imgSrc: '/assets/img/angularjs.png',
        link: 'https://angularjs.org/',
      },
      {
        name: 'EmberJS',
        imgSrc: '/assets/img/emberjs.png',
        link: 'https://angularjs.org/',
      },
    ],
  };
}
