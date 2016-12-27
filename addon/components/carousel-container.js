import Component from 'ember-component';
import layout from '../templates/components/carousel-container';

import computed, { reads } from 'ember-computed';
import run, { later } from 'ember-runloop';
import { A } from 'ember-array/utils';
import get from 'ember-metal/get';
import set from 'ember-metal/set';

export default Component.extend({
  classNames: ['carousel-container'],

  layout: layout,
  transitionInterval: 500,
  isCarouselParentContainer: true,
  carouselItems: null,
  totalCarouselItems: reads('carouselItems.length'),

  init() {
    this._super(...arguments);
    set(this, 'carouselItems', A());
  },

  activeCarouselItem: computed('carouselItems.length', 'carouselItems.@each.isActive', function () {
    return get(this, 'carouselItems').findBy('isActive');
  }),

  registerCarouselItem(carouselItem) {
    get(this, 'carouselItems').pushObject(carouselItem);
  },

  slide(newActiveIndex, direction) {
    let carouselItems = get(this, 'carouselItems');
    let activeCarouselItem = get(this, 'activeCarouselItem');
    let newActiveCarouselItem = carouselItems[newActiveIndex];
    let transitionInterval = get(this, 'transitionInterval');
    let transitionOffset = 50;

    run(function() {
      set(activeCarouselItem, 'from', direction);
      set(newActiveCarouselItem, 'from', direction);
    });

    later(function() {
      set(activeCarouselItem, 'slidingOut', true);
      set(newActiveCarouselItem, 'slidingIn', true);
    }, transitionOffset);

    later(function() {
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
    }, (transitionInterval + transitionOffset));
  },

  slideRight() {
    let direction = 'right';
    let activeIndex = get(this, 'activeCarouselItem.index');
    let newActiveIndex = activeIndex - 1;

    if (activeIndex === 0) {
      newActiveIndex = get(this, 'totalCarouselItems') - 1;
    }

    if (get(this, 'onSlide')) {
      this.sendAction('onSlide', {
        index: newActiveIndex,
        previousIndex: activeIndex,
        direction
      });
    }

    this.slide(newActiveIndex, direction);
  },

  slideLeft() {
    let direction = 'left';
    let activeIndex = get(this, 'activeCarouselItem.index');
    let newActiveIndex = activeIndex + 1;

    if (activeIndex === (get(this, 'totalCarouselItems') - 1)) {
      newActiveIndex = 0;
    }

    if (get(this, 'onSlide')) {
      this.sendAction('onSlide', {
        index: newActiveIndex,
        previousIndex: activeIndex,
        direction
      });
    }

    this.slide(newActiveIndex, direction);
  }
});
