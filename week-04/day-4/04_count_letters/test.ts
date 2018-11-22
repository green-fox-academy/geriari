import { test } from 'tape';
import { countLetters } from './function';

test('Count letter function test with a string with lowercase letters', t => {
  t.deepEqual(countLetters('zfdggaaa'), {a: 3, d: 1, f: 1, g: 2, z: 1});
  t.end();
});

test('Count letter function test with a string with lowercase and uppercase letters', t => {
  t.deepEqual(countLetters('zFdggAaa'), {A: 1, F: 1, a: 2, d: 1, g: 2, z: 1});
  t.end();
});

test('Count letter function test with an empty string', t => {
  t.deepEqual(countLetters(''), {});
  t.end();
});
