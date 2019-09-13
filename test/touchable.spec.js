describe('Touchable behavior', () => {
  it('should add `touch` class to html element', done => {
    purejs.touchable();
    expect(document.documentElement.className).to.have.string('touch');
    done();
  });
});
