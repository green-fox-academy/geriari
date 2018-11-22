import { test } from 'tape';
import { fibonacci } from './function';

test('Fibonacci function, parameter: 0', t => {
  t.deepEqual(fibonacci(0), 0);
  t.end();
});

test('Fibonacci function, parameter: 1', t => {
  t.deepEqual(fibonacci(1), 1);
  t.end();
});

test('Fibonacci function, parameter: 2', t => {
  t.deepEqual(fibonacci(2), 1);
  t.end();
});

test('Fibonacci function, parameter: 4', t => {
  t.deepEqual(fibonacci(4), 3);
  t.end();
});

test('Fibonacci function, parameter: 10', t => {
  t.deepEqual(fibonacci(10), 55);
  t.end();
});
