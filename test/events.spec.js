describe('Events behavior', () => {
  describe('onDocumentReady', () => {
    it('function should be called on document ready', done => {
      const fnReady = { bar: (arg) => {} };
      const callback = () => {
        fnReady.bar('baz');
      };

      sinon.spy(fnReady, 'bar');
      purejs.events.onDocumentReady(callback);

      fnReady.bar.should.have.been.calledWith('baz');
      done();
    });
  });

  describe('onResize', () => {
    it('function should be called on resize', done => {
      const fnResize = { bar: () => {} };
      const callback = () => {
        fnResize.bar('baz');
      };

      sinon.spy(fnResize, 'bar');
      purejs.events.onResize(callback);
      window.innerWidth = window.innerWidth - 100;
      window.dispatchEvent(new Event('resize'));

      setTimeout(() => {
        fnResize.bar.should.have.been.calledWith('baz');
        window.removeEventListener('resize', callback);
        done();
      }, 150);
    });
  });
});
