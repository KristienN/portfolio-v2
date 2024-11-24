import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export interface SampleWorkSignature {}

interface Project {
  name: string;
  url: string;
}

export default class SampleWork extends Component<SampleWorkSignature> {
  project: Project[] = [
    {
      name: 'lusk-engineering',
      url: 'http://lusk-engineering.com',
    },
    {
      name: 'sentence-diagraming',
      url: 'https://sentence-diagramming-ui.vercel.app/',
    },
  ];

  @tracked activeProject: Project = this.project[1] as Project;
  @tracked inActiveProject: Project = this.project[0] as Project;

  @action
  setActiveProject() {
    const temp: Project = this.activeProject;
    this.activeProject = this.inActiveProject;
    this.inActiveProject = temp;
  }
}
