import Component from '@glimmer/component';

export interface ExtrasSignature {}

interface Tools {
  name: string;
  imgSrc: string;
}

export default class Extras extends Component<ExtrasSignature> {
  tools: Tools[] = [
    { name: 'aws', imgSrc: '/assets/img/aws.png' },
    { name: 'digitalocean', imgSrc: '/assets/img/digitalocean.png' },
    { name: 'terraform', imgSrc: '/assets/img/terraform.png' },
    { name: 'circleci', imgSrc: '/assets/img/circle-ci.png' },
    { name: 'docker', imgSrc: '/assets/img/docker.png' },
    { name: 'kubernetes', imgSrc: '/assets/img/k8s.png' },
    { name: 'go', imgSrc: '/assets/img/go.png' },
    { name: 'linux', imgSrc: '/assets/img/linux.png' },
  ];
}
