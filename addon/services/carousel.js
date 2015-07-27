import Ember from 'ember';

const { computed } = Ember;

export default Ember.Service.extend({
  carouselItems: Ember.A(),
  totalCarouselItems: computed.reads('carouselItems.length'),

  activeCarouselItem: computed('carouselItems.length', 'carouselItems.@each.isActive', {
    get() {
      return this.get('carouselItems').findBy('isActive');
    }
  }),

  registerCarouselItem(carouselItem) {
    this.get('carouselItems').pushObject(carouselItem);
  }
});
