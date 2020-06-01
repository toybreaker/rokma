[![Build Status](https://travis-ci.org/toybreaker/rokma.svg?branch=source)](https://travis-ci.org/toybreaker/rokma)
[![Netlify Status](https://api.netlify.com/api/v1/badges/9a736c24-fd74-472d-9e31-683308faf7f0/deploy-status)](https://app.netlify.com/sites/rokma/deploys)

### [Rokma](https://rokma.com)

Ultra light mobile-first static website. Responsive images. Jekyll portfolio, tested!  Adhering to [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)[KISS](https://en.wikipedia.org/wiki/KISS_principle)!

version: 17.0.0


## 2DOs

- cleanup
- service workers

## Slider considerations:

- [ ] [swiper.js](http://www.idangero.us/swiper/) (20kb) | fade need img as backgrounds: [demo](http://www.idangero.us/swiper/demos/16-effect-fade.html), [code](https://github.com/nolimits4web/Swiper/blob/master/demos/16-effect-fade.html)
- [ ] [flickity](http://flickity.metafizzy.co/) (58kb) | cool but hum...
- [ ] [vegas](https://github.com/jaysalvat/vegas) (64kb) | need at least zepto (9kb) or jquery(84kb)
- [X] native scroll + [scrollReveal.js](https://github.com/jlmakes/scrollReveal.js/tree/master) (9kb)




## Dev prerequisites:

### Install node dependencies into project's local dir

```sh
npm install
```

## Make the following folder structure:

```sh
_src  
  uploads  
   _files_renamed  
   _files_to_rename  
   _images_to_lowercase  
   _images_to_rename  
   _images_to_size  
```



## Develop:

[Travis-ci](https://github.com/toybreaker/rokma/blob/gh-pages/.travis.yml) will test source branch.

### Run gulp to produce images

Open a new terminal window and

#### Rename all to lowercase + del

```sh
gulp lower
```

#### Produce all the different sizes images + del

```sh
gulp sizes
```

#### Rename images, deleting current file names, with dir name and progressive index + del

```sh
gulp rename
```

#### Rename images adding dir name and progressive index + del

```sh
gulp curate
```

#### Rename files, deleting current file names, and using dir name and progressive index

```sh
gulp renamefiles
```



## Warning:

Despite this repo being public, it doesn't mean that all these assets are open-source and/or copyright free, or even that you may use any of them.

Please, ask for permission first by contacting us: _info@junglestar.org_

All photos © Rokma. All rights reserved.

Thanks, Junglestar team
