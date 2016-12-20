import Component from 'ember-component';
import layout from '../templates/components/carousel-arrow';

import computed from 'ember-computed';
import get from 'ember-metal/get';

const carouselArrowClassMap = {
  left: 'carousel-left-arrow',
  right: 'carousel-right-arrow'
};

const carouselSlideActionMap = {
  left: 'slideLeft',
  right: 'slideRight'
};

export default Component.extend({
  classNamesBindings: ['carousel-arrow-class'],
  layout: layout,

  'carousel-arrow-class': computed('direction', function() {
    return carouselArrowClassMap[get(this, 'direction')];
  }),

  click() {
    let method = carouselSlideActionMap[get(this, 'direction')];
    this.nearestWithProperty('isCarouselParentContainer')[method]();
  }
});
