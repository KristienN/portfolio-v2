import Component from '@glimmer/component';

interface FrameworkSignature {}

interface IFramework {
  name: string;
  imgSrc: string;
  link: string;
  effect: string;
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
        effect: 'hover:-translate-x-8 hover:translate-y-8  hover:bg-gray-500',
      },
      {
        name: 'Spring',
        imgSrc: '/assets/img/springboot.png',
        link: 'https://spring.io/',
        effect: 'hover:translate-y-8 hover:bg-green-400',
      },
      {
        name: 'Express',
        imgSrc: '/assets/img/express.png',
        link: 'https://expressjs.com/',
        effect: 'hover:translate-x-8 hover:translate-y-8 hover:bg-green-300',
      },
    ],
    frontend: [
      {
        name: 'React',
        imgSrc: '/assets/img/react.png',
        link: 'https://react.dev',
        effect: 'hover:-translate-x-8 hover:-translate-y-8 hover:bg-blue-300',
      },
      {
        name: 'AngularJS',
        imgSrc: '/assets/img/angularjs.png',
        link: 'https://angularjs.org/',
        effect: 'hover:-translate-y-8 hover:bg-red-500',
      },
      {
        name: 'EmberJS',
        imgSrc: '/assets/img/emberjs.png',
        link: 'https://angularjs.org/',
        effect: 'hover:translate-x-8 hover:-translate-y-8 hover:bg-orange-300',
      },
    ],
  };
}
