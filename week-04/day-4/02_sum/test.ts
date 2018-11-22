import { test } from 'tape';
import { Sum } from './class';

test('Sum test with multiple elements', t => {
  const listOfNumbers = new Sum([1, 2, 3, 4, 5]);
  t.equal(listOfNumbers.sum(), 15);
  t.end();
});

test('Sum test with zero elements', t => {
  const listOfNumbers = new Sum([]);
  t.equal(listOfNumbers.sum(), 0);
  t.end();
});

test('Sum test with one element', t => {
  const listOfNumbers = new Sum([10]);
  t.equal(listOfNumbers.sum(), 10);
  t.end();
});

test('Sum test with null element', t => {
  const listOfNumbers = new Sum([null]);
  t.equal(listOfNumbers.sum(), 0);
  t.end();
});
