let moduleRoot = '../es6';
if (process.env.TEST_RELEASE) {
  moduleRoot = '../dist';
}

const sublOpen = require(moduleRoot);

describe('sublOpen', () => {
  it('works', async () => {
    const result = await sublOpen();
    result.should.be.equal(42);
  });
});

