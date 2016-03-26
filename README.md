#### [Rokma](http://rokma.com) ⟐ Polimath ⟐

Super light mobile-first portfolio display static website. Fully responsive. Focus on speed and simplicity, with care for minimizing network request and delivering a polished meaningful user experience.

Adhering to [K.I.S.S](https://en.wikipedia.org/wiki/KISS_principle) • [D.R.Y.](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) (uhm... well, partly. Really not yet!)

v 16.1.0


## 2DOs

Urgent:

- tests on Opera mini.

Sometime soon:

- service workers
- some-kind-of template (jade?)

Maybe:

- quick contact form


## Slider considerations:

- [ ] [swiper.js](http://www.idangero.us/swiper/) (20kb) | fade need img as backgrounds: [demo](http://www.idangero.us/swiper/demos/16-effect-fade.html), [code](https://github.com/nolimits4web/Swiper/blob/master/demos/16-effect-fade.html)
- [ ] [flickity](http://flickity.metafizzy.co/) (58kb) | currently online
- [ ] [vegas](https://github.com/jaysalvat/vegas) (64kb) | need at least zepto (9kb) or jquery(84kb)
- [X] native scroll + [scrollReveal.js](https://github.com/jlmakes/scrollReveal.js/tree/master) (9kb)


#### frontend features
- no jquery
- [RWD](https://en.wikipedia.org/wiki/Responsive_web_design) with [Imager.js](https://github.com/BBC-News/Imager.js/) to handle images

#### setup
- `npm install` setup dependencies
- `npm install imagemin-pngquant` to work images

#### dev features
- `gulp` task to compile sass and enable browsersync
- `gulp images` task to produce sized copies


## Changelog

#### v 16.1.0:
- setup opensource repo


## Warning:

Despite this repo being public, it doesn't mean that all these assets are open-source and/or copyright free, or even that you may use any of them.

Please, ask for permission first by contacting us: _info@junglestar.org_

All photos © Rokma. All rights reserved.

Thanks, Junglestar team
