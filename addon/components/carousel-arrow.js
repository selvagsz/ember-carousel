import Component from '@ember/component';
import { computed, get } from '@ember/object';
import layout from '../templates/components/carousel-arrow';

const carouselArrowClassMap = {
  left: 'carousel-left-arrow',
  right: 'carousel-right-arrow'
};

export default Component.extend({
  classNameBindings: ['carousel-arrow-class'],
  layout,

  'carousel-arrow-class': computed('direction', function() {
    return carouselArrowClassMap[get(this, 'direction')];
  })
});
