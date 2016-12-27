# ember-carousel

An ember addon for Carousel component

[DEMO](http://selvagsz.github.io/ember-carousel)

## Usage

From within your Ember CLI application, run the following:

```no-highlight
ember install ember-carousel
```

Add invoke the component as follows

```handlebars
{{#carousel-container transitionInterval=400}}
  {{#carousel-body}}
    {{#carousel-item}}
      Emberjs
    {{/carousel-item}}
    {{#carousel-item}}
      Reactjs
    {{/carousel-item}}
    {{#carousel-item}}
      Angularjs
    {{/carousel-item}}
  {{/carousel-body}}

  {{#carousel-arrow direction="left" tagName="button"}}
    Slide Left
  {{/carousel-arrow}}
  {{#carousel-arrow direction="right" tagName="button"}}
    Slide Right
  {{/carousel-arrow}}
{{/carousel-container}}
```

## Attributes

### `{{carousel-container}}`

- `transitionInterval` - Defaults to `500`.
- `onSlide` - Optional, an action that receives one parameter, an object like `{ index: 3, previousIndex: 2, direction: 'right' }`.  
  Triggered before the transition is completed.

### `{{carousel-arrow}}`

- `direction` - Either `'left'` or `'right'`.


## Development

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
