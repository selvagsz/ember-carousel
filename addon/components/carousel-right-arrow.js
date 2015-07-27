import Ember from 'ember';
import layout from '../templates/components/carousel-right-arrow';

export default Ember.Component.extend({
  layout: layout,
  carousel: Ember.inject.service(),
  classNames: ['carousel-right-arrow'],

  click() {
    this.get('carousel').slideRight();
  }
});
