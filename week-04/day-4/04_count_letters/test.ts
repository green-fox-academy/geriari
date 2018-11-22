import { test } from 'tape';
import { countLetters } from './function';

test('Count letter function test with a normal string', t => {
  t.equal(countLetters('zfdggaaa'), {
    a: 3,
    d: 1,
    f: 1,
    g: 2,
    z: 1
  });
  t.end();
});
