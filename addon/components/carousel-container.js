import Ember from 'ember';
import layout from '../templates/components/carousel-container';

const { on } = Ember;

export default Ember.Component.extend({
  layout: layout,
  carousel: Ember.inject.service(),

  // Initialize the `service:carousel` with the carousel items
  initializeCarouselItems: on('init', function() {
    this.set('carousel.carouselItems', Ember.A());
  })
});
