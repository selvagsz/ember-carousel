import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('carousel-indicator', 'Integration | Component | carousel indicator', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{carousel-indicator}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#carousel-indicator}}
      template block text
    {{/carousel-indicator}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
