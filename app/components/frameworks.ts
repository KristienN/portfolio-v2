import Component from '@glimmer/component';

interface FrameworkSignature {}

interface IFramework {
  name: string;
  imgSrc: string;
}

interface IFrameworks {
  backend: IFramework[];
  frontend: IFramework[];
}

export default class Frameworks extends Component<FrameworkSignature> {
  frameworks: IFrameworks = {
    backend: [
      {
        name: 'fastify',
        imgSrc: '/assets/img/fastify.png',
      },
      {
        name: 'springboot',
        imgSrc: '/assets/img/springboot.png',
      },
      {
        name: 'express',
        imgSrc: '/assets/img/express.png',
      },
    ],
    frontend: [
      {
        name: 'react',
        imgSrc: '/assets/img/react.png',
      },
      {
        name: 'angularjs',
        imgSrc: '/assets/img/angularjs.png',
      },
      {
        name: 'emberjs',
        imgSrc: '/assets/img/emberjs.png',
      },
    ],
  };
}
