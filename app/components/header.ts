import Component from '@glimmer/component';
import Owner from '@ember/owner';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

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

  @action
  fadeIn(element: Element) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(`yes`);
          entry.target.classList.add('fade-in');
        }
      });
    });

    observer.observe(element);
  }

  @action
  fadeInTop(element: Element) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(`yes`);
          entry.target.classList.add('fade-in-top');
        }
      });
    });

    observer.observe(element);
  }
}
