import Ember from 'ember';
import layout from '../templates/components/carousel-item';

const { on, computed } = Ember;

export default Ember.Component.extend({
  layout: layout,
  carousel: Ember.inject.service(),
  classNameBindings: [':carousel-item', 'isActive:active', 'slidingIn:slide-in', 'slidingOut:slide-out', 'from'],

  index: 0,

  _carouselContainer: null,

  isActive: computed('_carouselContainer.carouselItems.[]', {
    get() {
      return this === this.get('_carouselContainer.carouselItems.firstObject');
    },

    set(key, value) {
      return value;
    }
  }),

  registerOnCarosuelBody: on('init', function() {
    const carouselContainer = this.nearestWithProperty('isCarouselParentContainer');
    this.set('_carouselContainer', carouselContainer);
    carouselContainer.registerCarouselItem(this);
    this.set('index', carouselContainer.get('totalCarouselItems') - 1);
  })
});
