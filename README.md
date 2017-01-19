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
{{#carousel-container transitionInterval=400 as |ui controls|}}
  <div class="carousel-body">
    {{#ui.item}}
      Emberjs
    {{/ui.item}}
    {{#ui.item}}
      Reactjs
    {{/ui.item}}
    {{#ui.item}}
      Angularjs
    {{/ui.item}}
  </div>

  <button onclick={{controls.previous}}>
    Slide Left
  </button>
  <button onclick={{controls.next}}>
    Slide Right
  </button>
{{/carousel-container}}
```

## API

### `{{carousel-container}}`

This is the primary component to start displaying carousel items.

#### Attributes

- `transitionInterval` - Defaults to `500`.
- `onSlide` - Optional, an action that receives one parameter, an object like `{ index: 3, previousIndex: 2, direction: 'right' }`.  
  Triggered before the transition is completed.

#### Yielded Params

This component yields two hashes, e.g. `{{#carousel-container as |ui act|}}`.
These parameters `ui` and `act` can be called anything, but they contain the following items:

- `ui` - is a hash with the following component items:
  * `item` - A component that should contain your slide contents, used like so `{{ui.item}}you content{{/ui.item}}`.
- `controls` - is a hash with the following action items:
  * `previous` - A closure action that changes to the previous slide.
  * `next` - A closure action that changes to the next slide.


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
