const CONTAINER1_OFFSET = 64;
const CONTAINER2_OFFSET = 664;
const CONTAINER3_OFFSET = 1264;
describe('Scroll behaviors', () => {
  before(() => {
    const fixture = `<div id="sample">
      <ul class="list">
        <li><a class="anchor1 js-anchor" data-anchor="container1"></a></li>
        <li class="anchor2 js-anchor" data-anchor="container2"></li>
      </ul>
      <div id="container1" style="height: 600px;">&nbsp;</div>
      <div id="container2" style="height: 600px;">&nbsp;</div>
      <div id="container3" style="height: 600px;">&nbsp;</div>
      <div class="js-cookies">
      <button class="js-cookies-accept"></button>
      </div>
      <footer id="footer" style="height: 600px;">&nbsp;</footer>
    </div>`;

    document.body.insertAdjacentHTML('afterbegin', fixture);
  });

  after(() => {
    document.body.removeChild(document.getElementById('sample'));
  });

  describe('safeScrollTop.js', () => {
    it('window offset should be on top of container', done => {
      expect(purejs.safeScrollTop()).to.equal(0);
      done();
    });
  });

  describe('scrollTo.js', () => {
    it('sample container should exist', done => {
      expect(document.querySelector('#sample')).to.not.be.null;
      done();
    });

    it('should anchor to first container', done => {
      purejs.scrollTo.anchor('#container1');
      setTimeout(() => {
        expect(CONTAINER1_OFFSET).to.equal(document.querySelector('#container1').offsetTop);
        done();
      }, 500);
    });

    it('should animate to second container', done => {
      purejs.scrollTo.animate('#container2');
      setTimeout(() => {
        expect(CONTAINER2_OFFSET).to.equal(document.querySelector('#container2').offsetTop);
        done();
      }, 600);
    });

    it('should animate to third container faster', done => {
      purejs.scrollTo.animate('#container3', 200);
      setTimeout(() => {
        expect(CONTAINER3_OFFSET).to.equal(document.querySelector('#container3').offsetTop);
        done();
      }, 300);
    });
  });

  describe('scrollDirection.js', () => {
    let scrollDirectionValue = 0;
    before(() => {
      purejs.scrollTo.anchor('#container2');
      window.addEventListener('scroll', () => {
        scrollDirectionValue = purejs.scrollDirection();
      });
    });

    it('should return -1 on scroll up', done => {
      purejs.scrollTo.animate(0, 200);
      setTimeout(() => {
        expect(scrollDirectionValue).to.equal(-1);
      }, 50);
      setTimeout(() => {
        expect(purejs.safeScrollTop()).to.equal(0);
        done();
      }, 300);
    });

    it('should return 1 on scroll down', done => {
      purejs.scrollTo.animate('#container2', 200);
      setTimeout(() => {
        expect(scrollDirectionValue).to.equal(1);
        done();
      }, 50);
      setTimeout(() => {
        expect(purejs.safeScrollTop()).to.equal(document.querySelector('#container2').offsetTop);
        done();
      }, 300);
    });
  });
});
