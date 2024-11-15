import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export interface HeaderSignature {
  // The arguments accepted by the component
  Args: {};
  // Any blocks yielded by the component
  Blocks: {
    default: [];
  };
  // The element to which `...attributes` is applied in the component template
  Element: null;
}

export default class Header extends Component<HeaderSignature> {
  jobs: string[] = ['Frontend', 'Backend', 'DevOps', 'Cloud'];
  @tracked currentJobTitle: string = 'Frontend';
  @tracked index: number = 0;

  constructor() {
    super(...arguments);
    this.updateJobTitle();
  }

  updateJobTitle(): void {
    setInterval(() => {
      this.index = (this.index + 1) % this.jobs.length;
      this.currentJobTitle = this.jobs[this.index];
    }, 2000);
  }
}
