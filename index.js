var expect = require('chai').expect;

expect({
    a: Symbol('test'),
      b: 'bar',
}).to.deep.equal({
    a: 'foo',
      b: 'bar',
})

