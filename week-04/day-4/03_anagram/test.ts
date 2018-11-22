import { test } from 'tape';
import { areAnagrams } from './function';

test('Anagram test with two strings that are anagrams', t => {
  t.equal(areAnagrams('abba', 'baba'), true);
  t.end();
});

test('Anagram test with two strings that are not anagrams', t => {
  t.notEqual(areAnagrams('abba', 'alma'), true);
  t.end();
});

test('Anagram test with two strings that are not the same length', t => {
  t.notEqual(areAnagrams('abba', 'aba'), true);
  t.end();
});

test('Anagram test with two strings, one of them empty', t => {
  t.notEqual(areAnagrams('abba', ''), true);
  t.end();
});

test('Anagram test with two strings, with different lowercase & uppercase letters', t => {
  t.equal(areAnagrams('abba', 'Baba'), false);
  t.end();
});

test('Anagram test with two strings, that are numbers', t => {
  t.equal(areAnagrams('1234', '2314'), true);
  t.end();
});
