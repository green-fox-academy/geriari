import { test } from 'tape';
import { NumberOperations } from './class';

test('add 2 numbers', t => {
  const operations = new NumberOperations();

  var actual = operations.addNum(1, 2);
  var expected = 3;

  t.equal(actual, expected);
  t.end();
});

test('test minusNum()', t => {
  const operations = new NumberOperations();

  t.equal(operations.minusNum(2, 1), 1);
  t.end();
})
