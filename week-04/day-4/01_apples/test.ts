import { test } from 'tape';
import { Apple } from './class';

test('Apple test', t => {
  const apple = new Apple();

  t.equal(apple.getApple(), 'apple');
  t.end();
});
