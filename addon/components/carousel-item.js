import Component from 'ember-component';
import layout from '../templates/components/carousel-item';

import computed from 'ember-computed';
import get from 'ember-metal/get';
import set from 'ember-metal/set';

export default Component.extend({
  classNameBindings: [':carousel-item', 'isActive:active', 'slidingIn:slide-in', 'slidingOut:slide-out', 'from'],

  layout: layout,
  index: 0,

  didInsertElement() {
    this.sendAction('register', this);

    let allItems = this.get('allItems');

    set(this, 'index', allItems.indexOf(this));
  },

  isActive: computed('allItems.@each', function() {
    return this === get(this, 'allItems.firstObject');
  })
});
