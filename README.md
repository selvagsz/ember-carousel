# Ember-carousel

An ember addon for Carousel component

```handlebars
  {{#carousel-container transition-interval=400}}
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

[DEMO](http://selvagsz.github.io/ember-carousel/)

## Installation

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
