import Ember from 'ember';
import layout from '../templates/components/carousel-arrow';

const carouselArrowClassMap = {
  left: 'carousel-left-arrow',
  right: 'carousel-right-arrow'
};

const carouselSlideActionMap = {
  left: 'slideLeft',
  right: 'slideRight'
};

const computed = Ember.computed;

export default Ember.Component.extend({
  layout: layout,
  carousel: Ember.inject.service(),
  classNamesBindings: ['carousel-arrow-class'],
  direction: 'left',

  'carousel-arrow-class': computed('direction', {
    get() {
      return carouselArrowClassMap[this.get('direction')];
    }
  }),

  click() {
    var method = carouselSlideActionMap[this.get('direction')];
    this.nearestWithProperty('isCarouselParentContainer')[method]();
  }
});
