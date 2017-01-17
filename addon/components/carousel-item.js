import Component from 'ember-component';
import layout from '../templates/components/carousel-item';

import computed from 'ember-computed';
import get from 'ember-metal/get';
import set from 'ember-metal/set';

export default Component.extend({
  classNameBindings: [':carousel-item', 'isActive:active', 'slidingIn:slide-in', 'slidingOut:slide-out', 'from'],

  layout: layout,
  index: 0,
  _carouselContainer: null,

  didInsertElement() {
    let carouselContainer = this.nearestWithProperty('isCarouselParentContainer');

    set(this, '_carouselContainer', carouselContainer);
    carouselContainer.registerCarouselItem(this);
    set(this, 'index', get(carouselContainer, 'totalCarouselItems') - 1);
  },

  isActive: computed('_carouselContainer.carouselItems.[]', function() {
    return this === get(this, '_carouselContainer.carouselItems.firstObject');
  })
});
