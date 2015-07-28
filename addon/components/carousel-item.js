import Ember from 'ember';
import layout from '../templates/components/carousel-item';

const { on, computed } = Ember;

export default Ember.Component.extend({
  layout: layout,
  carousel: Ember.inject.service(),
  classNameBindings: [':carousel-item', 'isActive:active', 'slidingIn:slide-in', 'slidingOut:slide-out', 'from'],

  index: 0,

  isActive: computed('carousel.carouselItems.[]', {
    get() {
      return this === this.get('carousel.carouselItems.firstObject');
    },

    set(key, value) {
      return value;
    }
  }),

  registerOnCarosuelBody: on('init', function() {
    const carouselSerivce = this.get('carousel');
    carouselSerivce.registerCarouselItem(this);
    this.set('index', carouselSerivce.get('totalCarouselItems') - 1);
  })
});
