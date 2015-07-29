import Ember from 'ember';
import layout from '../templates/components/carousel-container';

const { computed, on, run } = Ember;

export default Ember.Component.extend({
  layout: layout,
  classNames: ['carousel-container'],

  isCarouselParentContainer: true,

  carouselItems: null,
  totalCarouselItems: computed.reads('carouselItems.length'),

  initializeCarouselItems: on('init', function() {
    this.set('carouselItems', Ember.A());
  }),

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

    run(function() {
      activeCarouselItem.set('from', direction);
      newActiveCarouselItem.set('from', direction);
    });

    run.later(function() {
      activeCarouselItem.set('slidingOut', true);
      newActiveCarouselItem.set('slidingIn', true);
    }, 50);

    run.later(function() {
      activeCarouselItem.setProperties({
        slidingOut: false,
        from: null,
        isActive: false
      });

      newActiveCarouselItem.setProperties({
        slidingIn: false,
        from: null,
        isActive: true
      });
    }, 550);
  },

  slideRight() {
    var activeIndex = this.get('activeCarouselItem.index');
    let newActiveIndex = activeIndex - 1;

    if(activeIndex === 0) {
      newActiveIndex = this.get('totalCarouselItems') - 1;
    }

    this.slide(newActiveIndex, 'right');
  },

  slideLeft() {
    var activeIndex = this.get('activeCarouselItem.index');
    let newActiveIndex = activeIndex + 1;

    if(activeIndex === (this.get('totalCarouselItems') - 1)) {
      newActiveIndex = 0;
    }

    this.slide(newActiveIndex, 'left');
  }
});
