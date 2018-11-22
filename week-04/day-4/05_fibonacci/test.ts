import { test } from 'tape';
import { fibonacci } from './function';

test('Fibonacci function, parameter: 4', t => {
  t.deepEqual(fibonacci(4), 3);
  t.end();
});
