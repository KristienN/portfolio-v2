import Component from '@glimmer/component';
import Owner from '@ember/owner';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export interface ExtrasSignature {}

interface Tag {
  imgSrc: string;
  name: string;
}

interface Description {
  line: string;
  color: string;
}

interface Steps {
  name: string;
  duration: string;
  status: string;
}

interface Job {
  name: string;
  description: Description[];
  tags: Tag[];
  status: string;
  link: boolean;
  duration: string;
  steps: Steps[];
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
        {
          line: '[00:00:00] - [WARN] Build: Outside of Frontend and Backend',
          color: 'text-yellow-500',
        },
        {
          line: '[00:00:01] - I have worked with custom Go CLI tools to standardize deployment across AWS workloads',
          color: 'text-white',
        },
        {
          line: '[00:00:01] - I also know my way around shell scripting and linux environments :-',
          color: 'text-white',
        },
        {
          line: '[00:00:02] - Just like the one this website is running on :)',
          color: 'text-white',
        },
        {
          line: '[00:00:05] - I also have experience with a wide host of CI/CD tooling:',
          color: 'text-white',
        },
        {
          line: '[00:00:13] - Screwdriver.cd, CircleCI, Github Actions, to name them all.',
          color: 'text-white',
        },
      ],
      tags: [
        { name: 'go', imgSrc: '/assets/img/go.png' },
        { name: 'linux', imgSrc: '/assets/img/linux.png' },
        { name: 'circleci', imgSrc: '/assets/img/circle-ci.png' },
      ],
      status: 'success',
      link: false,
      duration: '33s',
      steps: [
        {
          name: 'Innovating with Go',
          duration: '13s',
          status: 'success',
        },
        {
          name: 'Handling Linux',
          duration: '9s',
          status: 'success',
        },
        {
          name: 'Automating with CI/CD',
          duration: '11s',
          status: 'success',
        },
      ],
    },
    {
      name: 'Publish',
      description: [
        {
          line: '[00:00:00] - [WARN] Publish: Docker, K8s, Helm... You Name it!',
          color: 'text-yellow-500',
        },
        {
          line: '[00:00:01] - I have worked with all the above technologies when it comes to deployment and Publishing:',
          color: 'text-white',
        },
        {
          line: '[00:00:01] - Docker Containers using both Docker & Podman',
          color: 'text-white',
        },
        {
          line: '[00:00:01] - Kubernetes, the manifests and kubectl commands',
          color: 'text-white',
        },
        {
          line: '[00:00:01] - Helm, the "charts"',
          color: 'text-white',
        },
        {
          line: '[00:00:01] - I have a handful of images floating around Amazon ECR, DockerHub and DOCR (Digital Ocean)',
          color: 'text-white',
        },
      ],
      tags: [
        { name: 'docker', imgSrc: '/assets/img/docker.png' },
        { name: 'kubernetes', imgSrc: '/assets/img/k8s.png' },
        { name: 'helm', imgSrc: '/assets/img/helm.png' },
      ],
      status: 'success',
      link: true,
      duration: '5s',
      steps: [
        {
          name: 'Containers',
          duration: '1s',
          status: 'success',
        },
        {
          name: 'Simple Deployments',
          duration: '2s',
          status: 'success',
        },
        {
          name: 'Orchastrating K8s',
          duration: '2s',
          status: 'success',
        },
      ],
    },
    {
      name: 'Pre-deploy',
      description: [
        {
          line: '[00:00:00] - [WARN] Pre-Deploy: Infrastructure as Code!',
          color: 'text-yellow-500',
        },
        {
          line: '[00:00:10] - I have been exposed to tooling like Cloudformation (AWS) and Terraform (Hashicorp)',
          color: 'text-white',
        },
        {
          line: '[00:00:11] - Such tools help in predefining the infrastructure of applications in the cloud.',
          color: 'text-white',
        },
        {
          line: '[00:00:24] - "Just like this application and its Digital Ocean droplet being defined using Terraform"',
          color: 'text-white',
        },
        {
          line: '[00:00:30] - However I do like clicking buttons and interacting with UIs :P',
          color: 'text-white',
        },
      ],
      tags: [
        { name: 'terraform', imgSrc: '/assets/img/terraform.png' },
        { name: 'cloudformation', imgSrc: '/assets/img/cloudformation.png' },
      ],
      status: 'success',
      link: true,
      duration: '2m 32s',
      steps: [
        {
          name: 'IaC',
          duration: '30s',
          status: 'success',
        },
        {
          name: 'Templates',
          duration: '6s',
          status: 'success',
        },
        {
          name: 'Cloud & Terra',
          duration: '1m 56s',
          status: 'success',
        },
      ],
    },
    {
      name: 'Deploy',
      description: [
        {
          line: '[00:00:00] - [WARN] Deploy: Cloud Services and Architecture',
          color: 'text-yellow-500',
        },

        {
          line: '[00:00:01] - I am pretty familiar with a lot of AWS Services:',
          color: 'text-white',
        },
        {
          line: '[00:00:01] - EKS, ECS, Fargate, EC2, & S3',
          color: 'text-white',
        },
        {
          line: '[00:00:02] - I am also familiar with a few Digital Ocean services like the droplet & DOCR services',
          color: 'text-white',
        },
        {
          line: '[00:00:02] - I would love to learn and use Vercel as a service, and will be doing so with my next project!',
          color: 'text-white',
        },
      ],
      tags: [
        { name: 'aws', imgSrc: '/assets/img/aws.png' },
        { name: 'digitalocean', imgSrc: '/assets/img/digitalocean.png' },
      ],
      status: 'in-progress',
      link: true,
      duration: 'dynamic',
      steps: [
        {
          name: 'Cloud',
          duration: '0s',
          status: 'success',
        },
        {
          name: 'Services',
          duration: '0s',
          status: 'success',
        },
        {
          name: 'Push',
          duration: 'dynamic',
          status: 'in-progress',
        },
      ],
    },
  ];

  @tracked selectedJob: Job = {
    name: '',
    description: [
      {
        line: '[SUCCESS] - Select a job to get started!',
        color: 'text-green-500',
      },
    ],
    tags: [{ name: 'dummy', imgSrc: '/assets/img/profile-pic.jpg' }],
    status: 'N/A',
    link: false,
    duration: 'none',
    steps: [
      {
        name: 'Steps',
        duration: '',
        status: 'in-progress',
      },
    ],
  };

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
