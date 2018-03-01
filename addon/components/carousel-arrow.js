import Component from '@ember/component';
import { computed, get } from '@ember/object';
import layout from '../templates/components/carousel-arrow';

const carouselArrowClassMap = {
  left: 'carousel-left-arrow',
  right: 'carousel-right-arrow'
};

const carouselSlideActionMap = {
  left: 'slideLeft',
  right: 'slideRight'
};

export default Component.extend({
  classNameBindings: ['carousel-arrow-class'],
  layout,

  'carousel-arrow-class': computed('direction', function() {
    return carouselArrowClassMap[get(this, 'direction')];
  }),

  click() {
    let method = carouselSlideActionMap[get(this, 'direction')];
    this.nearestWithProperty('isCarouselParentContainer')[method]();
  }
});
