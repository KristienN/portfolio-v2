import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export interface GoodbyeSignature {}

export default class Goodbye extends Component<GoodbyeSignature> {
  days: string[] = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  @tracked currentDay = this.days[new Date().getDay()] as string;
}
