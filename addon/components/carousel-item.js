import Ember from 'ember';
import layout from '../templates/components/carousel-item';

const { on, computed } = Ember;

export default Ember.Component.extend({
  layout: layout,
  carousel: Ember.inject.service(),
  classNameBindings: [':carousel-item', 'isActive:active'],

  'is-default': false,
  index: 0,

  isActive: computed('carousel.carouselItems.[]', 'is-default', {
    get() {
      return this.get('is-default') || (this === this.get('carousel.carouselItems.firstObject'));
    },

    set(key, value) {
      return value;
    }
  }),

  registerOnCarosuelBody: on('init', function() {
    debugger;
    const carouselSerivce = this.get('carousel');
    carouselSerivce.registerCarouselItem(this);
    this.set('index', carouselSerivce.get('carouselItems.length') - 1);
  })
});
