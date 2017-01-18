import Component from 'ember-component';
import layout from '../templates/components/carousel-item';

import { ChildMixin } from 'ember-composability-tools';
import computed from 'ember-computed';
import get from 'ember-metal/get';
import set from 'ember-metal/set';

export default Component.extend(ChildMixin, {
  classNameBindings: [':carousel-item', 'isActive:active', 'slidingIn:slide-in', 'slidingOut:slide-out', 'from'],

  layout: layout,
  index: 0,
  carouselItems: computed.readOnly('parentComponent.carouselItems'),

  didInsertElement() {
    let carouselContainer = this.get('parentComponent');
    let totalCarouselItems = get(carouselContainer, 'totalCarouselItems');

    set(this, 'index', totalCarouselItems - 1);
  },

  isActive: computed('carouselItems.[]', function() {
    return this === get(this, 'carouselItems.firstObject');
  })
});
