import Component from '@glimmer/component';
import Owner from '@ember/owner';
import { tracked } from '@glimmer/tracking';

export interface ExtrasSignature {}

interface Tag {
  imgSrc: string;
  name: string;
}

interface Job {
  name: string;
  description: string;
  tags: Tag[];
  status: string;
  link: boolean;
  duration: string;
}

export default class Extras extends Component<ExtrasSignature> {
  @tracked seconds: number = 0;
  @tracked minutes: number = 0;
  @tracked dynamicDuration: string = '5m 0s';

  buttons: string[] = ['Describe', 'Install', 'Output'];

  job: Job[] = [
    {
      name: 'Build',
      description:
        'This is some dummy text to describe this element in the weird creative pipeline that i am drawing.',
      tags: [
        { name: 'go', imgSrc: '/assets/img/go.png' },
        { name: 'linux', imgSrc: '/assets/img/linux.png' },
      ],
      status: 'success',
      link: true,
      duration: '33s',
    },
    {
      name: 'Publish',
      description:
        'This is some dummy text to describe this element in the weird creative pipeline that i am drawing.',
      tags: [
        { name: 'docker', imgSrc: '/assets/img/docker.png' },
        { name: 'kubernetes', imgSrc: '/assets/img/k8s.png' },
      ],
      status: 'success',
      link: true,
      duration: '5s',
    },
    {
      name: 'Pre-deploy',
      description:
        'This is some dummy text to describe this element in the weird creative pipeline that i am drawing.',
      tags: [{ name: 'terraform', imgSrc: '/assets/img/terraform.png' }],
      status: 'success',
      link: true,
      duration: '2m 32s',
    },
    {
      name: 'Deploy',
      description:
        'This is some dummy text to describe this element in the weird creative pipeline that i am drawing.',
      tags: [
        { name: 'aws', imgSrc: '/assets/img/aws.png' },
        { name: 'digitalocean', imgSrc: '/assets/img/digitalocean.png' },
      ],
      status: 'in-progress',
      link: false,
      duration: 'dynamic',
    },
  ];

  constructor(owner: Owner, args: ExtrasSignature) {
    super(owner, args);
    this.increment();
  }

  increment(): void {
    setInterval(() => {
      this.seconds += 1;
      if (this.seconds === 60) {
        this.minutes += 1;
        this.seconds = 0;
      }
      if (this.minutes === 0) {
        this.dynamicDuration = `${this.seconds}s`;
      } else {
        this.dynamicDuration = `${this.minutes}m ${this.seconds}s`;
      }
    }, 1000);
  }
}
