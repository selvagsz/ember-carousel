import Ember from 'ember';
import layout from '../templates/components/carousel-left-arrow';


export default Ember.Component.extend({
  layout: layout,
  carousel: Ember.inject.service(),

  click() {
    var carouselItems = this.get('carousel.carouselItems');
    var activeCarouselItem = this.get('carousel.activeCarouselItem');

    var activeIndex = activeCarouselItem.get('index');
    var newActiveIndex = activeIndex === 0? --carouselItems.slice().length : --activeIndex;

    var newActiveCarouselItem = carouselItems[newActiveIndex];

    activeCarouselItem.$().addClass('left');
    newActiveCarouselItem.$().addClass('left');

    Ember.run.later(this, function() {
      activeCarouselItem.set('isActive', false);
      newActiveCarouselItem.set('isActive', true);
    });
  }
});
