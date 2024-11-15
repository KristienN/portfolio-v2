import Component from '@glimmer/component';
import Owner from '@ember/owner';
import { tracked } from '@glimmer/tracking';

export interface HeaderSignature {}

export default class Header extends Component<HeaderSignature> {
  jobs: string[] = ['Frontend', 'Backend', 'DevOps', 'Cloud'];
  @tracked currentJobTitle: string = this.jobs[0] as string;
  @tracked index: number = 0;

  constructor(owner: Owner, args: HeaderSignature) {
    super(owner, args);
    this.updateJobTitle();
  }

  updateJobTitle(): void {
    setInterval(() => {
      this.index = (this.index + 1) % this.jobs.length;
      this.currentJobTitle = this.jobs[this.index] as string;
    }, 2000);
  }
}
