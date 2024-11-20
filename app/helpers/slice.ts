import { helper } from '@ember/component/helper';

const getSlice = (start: unknown, end: unknown, arr: unknown): unknown => {
  // @ts-ignore
  return arr.slice(start, end);
};

export default helper(function (positional) {
  return getSlice(positional[0], positional[1], positional[2]);
});
