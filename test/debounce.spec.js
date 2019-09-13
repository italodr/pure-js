describe('Debounce behavior', () => {
  it('function without debounce should be called 99 times', done => {
    const fnNoDebounce = { bar: () => {} };
    const callback = () => {
      fnNoDebounce.bar();
    };

    sinon.spy(fnNoDebounce, 'bar');
    window.addEventListener('resize', callback);

    for (let i = 1; i < 5; i++) {
      window.innerWidth = i % 2 ? window.innerWidth - 100 :  window.innerWidth + 100;
      window.dispatchEvent(new Event('resize'));
    }

    setTimeout(() => {
      fnNoDebounce.bar.should.have.been.callCount(4);
      window.removeEventListener('resize', callback)
      done();
    }, 300);
  });

  it('function with debounce should be called once', done => {
    const fnDebounce = { bar: () => {} };
    const callback = () => {
      fnDebounce.bar();
    };

    sinon.spy(fnDebounce, 'bar');
    window.addEventListener('resize', purejs.debounce(callback, 200));

    for (let i = 1; i < 100; i++) {
      window.innerWidth = i * 100;
      window.dispatchEvent(new Event('resize'));
    }
    setTimeout(() => {
      fnDebounce.bar.should.have.been.calledOnce;
      window.removeEventListener('resize', purejs.debounce(callback, 200));
      done();
    }, 300);
  });
});
