import Component from '@glimmer/component';

interface Highlight {
  company: string;
  title: string;
  description: string;
  logoSrc: string;
  dates: string;
  locations: string;
}

export interface HighlightsSignature {}

export default class HighlightsComponent extends Component<HighlightsSignature> {
  highlights: Highlight[] = [
    {
      company: 'Yahoo Inc',
      title: 'Software Developer Intern',
      description:
        'During this internship, I contributed to a centralized authorization system using AngularJS and Spring Boot, with Redis and Elastisearch optimizing performance. This strengthened my full-stack development skills and collaborative problem-solving.',
      logoSrc: '/assets/img/yahoo-inc.png',
      dates: 'Janaury - September 2022',
      locations: 'Dublin, IRL',
    },
    {
      company: 'Maynooth University',
      title: 'Computer Science Lab Demonstrator',
      description:
        'At Maynooth University, I supervised full-stack project labs using agile methodologies and regular scrums, assisted in Java data structures and algorithms labs, evaluated student work, and provided guidance, all while completing my degree.',
      logoSrc: '/assets/img/maynooth-university.png',
      dates: 'September 2022 - May 2023',
      locations: 'Maynooth, IRL',
    },
    {
      company: 'Yahoo Inc',
      title: 'Associate Software Developer',
      description:
        ' I am contributing to maintaining a developer portal monorepo using the React-based framework, and currently assisting in standardizing cloud infrastructure, and helped implement CI/CD pipelines with AWS services (EKS, Fargate, etc) and Go CLI tooling.',
      logoSrc: '/assets/img/yahoo-inc.png',
      dates: 'July 2023 - Present',
      locations: 'Dublin, IRL | London, UK',
    },
  ];
}
