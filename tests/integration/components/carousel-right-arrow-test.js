import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('carousel-right-arrow', 'Integration | Component | carousel right arrow', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{carousel-right-arrow}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#carousel-right-arrow}}
      template block text
    {{/carousel-right-arrow}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
