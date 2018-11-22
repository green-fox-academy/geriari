import { test } from 'tape';
import { fibonacci } from './function';

test('Fibonacci function, parameter: 0', t => {
  t.equal(fibonacci(0), 0);
  t.end();
});

test('Fibonacci function, parameter: 1', t => {
  t.equal(fibonacci(1), 1);
  t.end();
});

test('Fibonacci function, parameter: 2', t => {
  t.equal(fibonacci(2), 1);
  t.end();
});

test('Fibonacci function, parameter: 4', t => {
  t.equal(fibonacci(4), 3);
  t.end();
});

test('Fibonacci function, parameter: 10', t => {
  t.equal(fibonacci(10), 55);
  t.end();
});

test('Fibonacci function, parameter: -1', t => {
  t.throws(function() {
    fibonacci(-1)
  }, 'Error: negative number.');
  t.end();
});

test('Fibonacci function, parameter: 3.5', t => {
  t.throws(function() {
    fibonacci(3.5)
  }, 'Error: not an integer number.');
  t.end();
});
