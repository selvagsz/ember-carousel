import Component from '@ember/component';
import { computed, get, set } from '@ember/object';
import layout from '../templates/components/carousel-item';

export default Component.extend({
  classNameBindings: [':carousel-item', 'isActive:active', 'slidingIn:slide-in', 'slidingOut:slide-out', 'from'],

  layout,
  index: 0,

  didInsertElement() {
    this._super(...arguments);
    get(this, 'register')(this);

    let allItems = this.get('allItems');

    set(this, 'index', allItems.indexOf(this));
  },

  isActive: computed('allItems.@each', function() {
    return this === get(this, 'allItems.firstObject');
  })
});
