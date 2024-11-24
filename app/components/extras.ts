import Component from '@glimmer/component';
import Owner from '@ember/owner';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export interface ExtrasSignature {}

interface Tag {
  imgSrc: string;
  name: string;
}

interface Job {
  name: string;
  description: string[];
  tags: Tag[];
  status: string;
  link: boolean;
  duration: string;
}

export default class Extras extends Component<ExtrasSignature> {
  @tracked seconds: number = 0;
  @tracked minutes: number = 0;
  @tracked dynamicDuration: string = '5m 0s';

  buttons: string[] = ['Describing', 'My Personal', 'Experience'];

  jobs: Job[] = [
    {
      name: 'Build',
      description: [
        '[00:00:01] - I have experience developing and maintaining CLI tools in Go, enabling the creation of pipeline templates for deploying AWS workloads.',
        '[00:00:01] - I have enhanced and optimized these tools, improving their efficiency and ensuring seamless integration with AWS services.',
        '[00:00:02] - I have extended the functionality of these tools to integrate with Release Management systems, enabling effective management and tracking of software releases.',
        '[00:00:03] - I have managed the automation and deployment of cloud infrastructure, ensuring smooth and reliable operations.',
      ],
      tags: [{ name: 'go', imgSrc: '/assets/img/go.png' }],
      status: 'success',
      link: true,
      duration: '33s',
    },
    {
      name: 'Publish',
      description: [
        '[00:00:01] - I have experience creating and managing Docker containers for personal projects, ensuring consistency across development and production environments.',
        '[00:00:01] - I build and optimize Dockerfiles using multi-stage builds to create efficient and secure container images.',
        '[00:00:02] - I work extensively with Docker, Kubernetes, and Helm in a CI/CD and DevOps environment, continuously enhancing my skills in container orchestration and automation.',
        '[00:00:05] - I maintain deployment templates that enable users to easily ship Kubernetes, Docker, and Helm applications, streamlining the deployment process.',
        '[00:00:05] - I orchestrate containerized applications using Kubernetes, ensuring scalability, reliability, and high availability in production environments.',
      ],
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
      description: [
        'This is some dummy text to describe this element in the weird creative pipeline that i am drawing.',
      ],
      tags: [{ name: 'terraform', imgSrc: '/assets/img/terraform.png' }],
      status: 'success',
      link: true,
      duration: '2m 32s',
    },
    {
      name: 'Deploy',
      description: [
        'This is some dummy text to describe this element in the weird creative pipeline that i am drawing.',
      ],
      tags: [
        { name: 'aws', imgSrc: '/assets/img/aws.png' },
        { name: 'digitalocean', imgSrc: '/assets/img/digitalocean.png' },
      ],
      status: 'in-progress',
      link: false,
      duration: 'dynamic',
    },
  ];

  @tracked selectedJob: Job = this.jobs[0] as Job;

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

  @action
  setSelectedJob(job: Job): void {
    this.selectedJob = job;
  }
}
