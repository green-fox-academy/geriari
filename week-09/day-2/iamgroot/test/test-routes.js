const test = require('tape');
const request = require('supertest');
const app = require('../routes');
test('groot endpoint with query', (t) => {
  request(app)
    .get('/groot?message=something')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) throw err;
      t.same(res.body, {
        'received': 'something',
        'translated': 'I am Groot!'
      }, 'test with a proper query');
      t.end();
    }); 
});
test('groot endpoint without query', (t) => {
  request(app)
    .get('/groot')
    .expect(210)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) throw err;
      t.same(res.body, {
        'error': 'I am Groot!'
      }, 'test without query');
      t.end();
    }); 
});