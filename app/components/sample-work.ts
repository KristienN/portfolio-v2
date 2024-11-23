import Component from '@glimmer/component';

export interface SampleWorkSignature {}

export default class SampleWork extends Component<SampleWorkSignature> {
  project: { name: string; url: string }[] = [
    {
      name: 'lusk-engineering',
      url: 'http://lusk-engineering.com',
    },
    {
      name: 'sentence-diagraming',
      url: 'https://sentence-diagramming-ui.vercel.app/',
    },
  ];
}
