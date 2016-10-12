import test from 'ava';

test(t => {
  t.pass('hi');
})

test(t => {
    t.plan(1);

    return Promise.resolve(3).then(n => {
        t.is(n, 3);
    });
});

test('bar', async t => {
    const bar = Promise.resolve('bar');
    t.is(await bar, 'bar');
});
