import Ember from 'ember';

const { computed, run } = Ember;

export default Ember.Service.extend({
  carouselItems: Ember.A(),
  totalCarouselItems: computed.reads('carouselItems.length'),

  activeCarouselItem: computed('carouselItems.length', 'carouselItems.@each.isActive', {
    get() {
      return this.get('carouselItems').findBy('isActive');
    }
  }),

  registerCarouselItem(carouselItem) {
    this.get('carouselItems').pushObject(carouselItem);
  },

  slideLeft() {
    var carouselItems = this.get('carouselItems');
    var activeCarouselItem = this.get('activeCarouselItem');
    var activeIndex = activeCarouselItem.get('index');
    let newActiveIndex = activeIndex - 1;

    if(activeIndex === 0) {
      newActiveIndex = carouselItems.length - 1;
    }

    var newActiveCarouselItem = carouselItems[newActiveIndex];

    activeCarouselItem.$()[0].classList.add('left');
    newActiveCarouselItem.$()[0].classList.add('left');

    run.later(function() {
      activeCarouselItem.set('isActive', false);
      newActiveCarouselItem.set('isActive', true);
    }, 500);
  },

  slideRight() {
    var carouselItems = this.get('carouselItems');
    var activeCarouselItem = this.get('activeCarouselItem');
    var activeIndex = activeCarouselItem.get('index');
    let newActiveIndex = activeIndex + 1;

    if(activeIndex === (this.get('totalCarouselItems') - 1)) {
      newActiveIndex = 0;
    }

    var newActiveCarouselItem = carouselItems[newActiveIndex];

    activeCarouselItem.$()[0].classList.add('right');
    newActiveCarouselItem.$()[0].classList.add('right');

    run.later(function() {
      activeCarouselItem.set('isActive', false);
      newActiveCarouselItem.set('isActive', true);
    }, 500);
  }
});
