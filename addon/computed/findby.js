import Ember from 'ember';

export default function(depArray, depkey, value) {
  return Ember.computed(`${depArray}.length`, depkey, value, {
    get() {
      return this.get(depArray).findBy(depkey, value);
    }
  })
}
