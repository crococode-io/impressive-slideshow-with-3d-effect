/**
 * demo.js
 * https://www.instagram.com/croco.code/
 * https://www.tiktok.com/@croco.code 
 * https://github.com/crococode-io 
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2022, CROCO.CODE
 * https://www.instagram.com/croco.code/
 * https://www.tiktok.com/@croco.code 
 * https://github.com/crococode-io 
 */

  // variables
  const carousel = document.querySelector('.croco-3d-carousel');
  const loader = document.querySelector('.loader');
  const timeline = new TimelineMax();
  const boxes = document.querySelectorAll('.item');
  const stage = document.querySelector('.stage');
  const $nav = document.querySelector('#nav');
  const angle = 360 / 3;
  const descTarget = document.querySelectorAll('.description-target');
  const headTarget = document.querySelectorAll('.headline-target');
  const discTarget = document.querySelectorAll('.discover-more-target');

  // images loaded
  imagesLoaded(carousel, { background: true }, function() {

    // hide loader
    loader.classList.add('is-loaded');

    // set stage
    TweenMax.set(stage, {
      css: {
        perspective: "86vw",
        transformStyle: "preserve-3d"
      }
    });
    if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
      TweenMax.set(stage, {
        css: {
          perspective: "8000px",
          transformStyle: "preserve-3d"
        }
      });        
    }

    // set data rotation for each item
    boxes.forEach(function(element, index) {
      TweenMax.set(element, {
        css: {
          rotationY: index * angle
        }
      });
      element.dataset.rotationY = index * angle;
    });

    // click on next item
    $nav.querySelector('#next').addEventListener('click', function() {

      timeline
        .staggerTo(descTarget, 0.5, {
          cycle: {
            yPercent: function(index, element) {
              return "100%";
            }
          },
          ease: Circ.easeOut
        }, 0)
        .staggerTo(headTarget, 0.5, {
          cycle: {
            yPercent: function(index, element) {
              return "100%";
            }
          },
          ease: Circ.easeOut
        }, 0, '-=0.5')
        .staggerTo(discTarget, 0.5, {
          cycle: {
            yPercent: function(index, element) {
              return "100%";
            }
          },
          ease: Circ.easeOut
        }, 0, '-=0.5')
        .staggerTo(boxes, 0.5, {
          cycle: {
            width: function(index, element) {
              return "80%";
            },
            height: function(index, element) {
              return "80%";
            },
            top: function(index, element) {
              return "10%";
            },
            right: function(index, element) {
              return "10%";
            },
            bottom: function(index, element) {
              return "10%";
            },
            left: function(index, element) {
              return "10%";
            }
          },
          ease: Circ.easeOut
        }, 0)
        .staggerTo(boxes, 1, {
          cycle: {
            rotationY: function(index, element) {
              var y1 = +element.dataset.rotationY;
              var y2 = y1 - angle;
              element.dataset.rotationY = y2;
              return y2;
            }
          },
          ease: Expo.easeInOut
        }, 0, '+=0.25')
        .staggerTo(boxes, 0.5, {
          cycle: {
            width: function(index, element) {
              return "100%";
            },
            height: function(index, element) {
              return "100%";
            },
            top: function(index, element) {
              return "0%";
            },
            right: function(index, element) {
              return "0%";
            },
            bottom: function(index, element) {
              return "0%";
            },
            left: function(index, element) {
              return "0%";
            }
          },
          ease: Circ.easeOut
        }, 0, '+=0.3')
        .staggerTo(descTarget, 0.5, {
          cycle: {
            yPercent: function(index, element) {
              return "0%";
            }
          },
          ease: Circ.easeOut
        }, 0)
        .staggerTo(headTarget, 0.5, {
          cycle: {
            yPercent: function(index, element) {
              return "0%";
            }
          },
          ease: Circ.easeOut
        }, 0, '-=0.5')
        .staggerTo(discTarget, 0.5, {
          cycle: {
            yPercent: function(index, element) {
              return "0%";
            }
          },
          ease: Circ.easeOut
        }, 0, '-=0.5')
    });


    // click on prev item
    $nav.querySelector('#prev').addEventListener('click', function() {

      timeline
        .staggerTo(descTarget, 0.5, {
          cycle: {
            yPercent: function(index, element) {
              return "-100%";
            }
          },
          ease: Circ.easeOut
        }, 0)
        .staggerTo(headTarget, 0.5, {
          cycle: {
            yPercent: function(index, element) {
              return "-100%";
            }
          },
          ease: Circ.easeOut
        }, 0, '-=0.5')
        .staggerTo(discTarget, 0.5, {
          cycle: {
            yPercent: function(index, element) {
              return "-100%";
            }
          },
          ease: Circ.easeOut
        }, 0, '-=0.5')
        .staggerTo(boxes, 0.5, {
          cycle: {
            width: function(index, element) {
              return "80%";
            },
            height: function(index, element) {
              return "80%";
            },
            top: function(index, element) {
              return "10%";
            },
            right: function(index, element) {
              return "10%";
            },
            bottom: function(index, element) {
              return "10%";
            },
            left: function(index, element) {
              return "10%";
            }
          },
          ease: Circ.easeOut
        }, 0)
        .staggerTo(boxes, 1, {
          cycle: {
            rotationY: function(index, element) {
              var y1 = +element.dataset.rotationY;
              var y2 = y1 + angle;
              element.dataset.rotationY = y2;
              return y2;
            }
          },
          ease: Expo.easeInOut
        }, 0, '+=0.25')
        .staggerTo(boxes, 0.5, {
          cycle: {
            width: function(index, element) {
              return "100%";
            },
            height: function(index, element) {
              return "100%";
            },
            top: function(index, element) {
              return "0%";
            },
            right: function(index, element) {
              return "0%";
            },
            bottom: function(index, element) {
              return "0%";
            },
            left: function(index, element) {
              return "0%";
            }
          },
          ease: Circ.easeOut
        }, 0, '+=0.3')
        .staggerTo(descTarget, 0.5, {
          cycle: {
            yPercent: function(index, element) {
              return "0%";
            }
          },
          ease: Circ.easeOut
        }, 0)
        .staggerTo(headTarget, 0.5, {
          cycle: {
            yPercent: function(index, element) {
              return "0%";
            }
          },
          ease: Circ.easeOut
        }, 0, '-=0.5')
        .staggerTo(discTarget, 0.5, {
          cycle: {
            yPercent: function(index, element) {
              return "0%";
            }
          },
          ease: Circ.easeOut
        }, 0, '-=0.5');
    });

  });