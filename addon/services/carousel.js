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

  slide(newActiveIndex, direction) {
    var carouselItems = this.get('carouselItems');
    var activeCarouselItem = this.get('activeCarouselItem');
    var newActiveCarouselItem = carouselItems[newActiveIndex];

    activeCarouselItem.$()[0].classList.add(direction);
    newActiveCarouselItem.$()[0].classList.add(direction);

    run.later(function() {
      activeCarouselItem.set('isActive', false);
      newActiveCarouselItem.set('isActive', true);
    }, 500);
  },

  slideLeft() {
    var activeIndex = this.get('activeCarouselItem.index');
    let newActiveIndex = activeIndex - 1;

    if(activeIndex === 0) {
      newActiveIndex = this.get('totalCarouselItems') - 1;
    }

    this.slide(newActiveIndex, 'left');
  },

  slideRight() {
    var activeIndex = this.get('activeCarouselItem.index');
    let newActiveIndex = activeIndex + 1;

    if(activeIndex === (this.get('totalCarouselItems') - 1)) {
      newActiveIndex = 0;
    }

    this.slide(newActiveIndex, 'right');
  }
});
