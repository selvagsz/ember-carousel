import Ember from 'ember';
import layout from '../templates/components/carousel-body';

const { on } = Ember;

export default Ember.Component.extend({
  layout: layout,

  isCarouselBody: true
});
