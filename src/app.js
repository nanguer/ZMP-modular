import { TimelineMax, TweenMax, Expo, TweenLite } from 'gsap';
import {
  delay,
  disappearSubtitles,
  disappearHistoria,
  disappearUslugi,
  disappearKontakt,
  showSection
} from './callbacks';
import {
  active,
  stripes,
  subtitlesDisappear,
  bigLogoSwipe,
  historiaBlock,
  uslugiBlock,
  kontaktBlock,
  portfolioBlock,
  servicesDetails
} from './gsap';
import './mgGlitch.min.js';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

var delayHome = 2.8;
let target;
let bottom = {
  events: '-5rem',
  sound: '-7rem',
  oswietlenie: '-4rem',
  ts: '-2rem',
  proj: '-9rem'
};

$('.sidebar').on('click', '#historia-option', function() {
  active.t3 = true;
  $(this)
    .children('.number')
    .addClass('selected');
  if (!active.t1) {
    disappearSubtitles();
  } else if (active.t4) {
    disappearUslugi();
  } else if (active.t5) {
    disappearKontakt();
  }
  bigLogoSwipe.tweenTo('Z', {
    delay: delay * 1.3,
    ease: Linear.easeOut,
    onComplete: showSection,
    onCompleteParams: [historiaBlock]
  });
  stripes.tweenTo(1.3, {
    delay: delay * 1.3,
    ease: Expo.easeInOut
  });
});
$('.sidebar').on('click', '#services-option', function() {
  active.t4 = true;
  $(this)
    .children('.number')
    .addClass('selected');
  if (!active.t1) {
    disappearSubtitles();
  } else if (active.t3) {
    disappearHistoria();
  } else if (active.t5) {
    disappearKontakt();
  }
  bigLogoSwipe.tweenTo(1.5, {
    delay: delay,
    ease: Linear.ease,
    onComplete: showSection,
    onCompleteParams: [uslugiBlock]
  });
  stripes.tweenTo(2, {
    delay: delay * 1.2,
    ease: Expo.easeInOut
  });
});
$('.sidebar').on('click', '#kontakt-option', function() {
  active.t5 = true;
  $(this)
    .children('.number')
    .addClass('selected');
  if (!active.t1) {
    disappearSubtitles();
  } else if (active.t3) {
    disappearHistoria();
  } else if (active.t4) {
    disappearUslugi();
  }
  bigLogoSwipe.tweenTo('P', {
    delay: delay,
    onComplete: showSection,
    onCompleteParams: [kontaktBlock]
  });
  stripes.tweenTo(3, {
    delay: delay * 1.2,
    ease: Expo.easeInOut
  });
});
$('.sidebar').on('click', '.portfolio-menu', function() {
  active.t6 = true;
  portfolioBlock.play();
});
$('.portfolio-sidebar').on('click', '.close-btn', function() {
  active.t6 = false;
  portfolioBlock.reverse();
});
$('.home-icon, #home-option').click(function() {
  $(this)
    .children('.number')
    .addClass('selected');
  if (active.t3) {
    disappearHistoria();
    delayHome = 1;
  } else if (active.t4) {
    disappearUslugi();
    delayHome = 1.5;
  } else if (active.t5) {
    disappearKontakt();
    delayHome = 3;
  }
  stripes.tweenTo('0', {
    delay: delay * 1.2
  });
  bigLogoSwipe.tweenTo('0', {
    delay: delay
  });
  subtitlesDisappear.tweenTo('0', {
    delay: delayHome
  });
  active.t1 = false;
});

$('.service__icon-container').on('click', '.services-link', function(e) {
  active.t7 = true;
  target = e.delegateTarget.id;
  TweenMax.to(`#${target}`, 0.5, {
    bottom: bottom[target],
    ease: Expo.easeInOut
  });

  servicesDetails.play();
});
$('.serv-sidebar').on('click', '.close-btn-right', function() {
  active.t7 = false;
  servicesDetails.reverse();
  TweenMax.to(`#${target}`, 0.5, {
    bottom: '-11rem',
    ease: Expo.easeInOut,
    delay: 0.5
  });
});

$(function() {
  $('.logo').mgGlitch({
    // set 'true' to stop the plugin
    destroy: true,
    // set 'false' to stop glitching
    glitch: true,
    // set 'false' to stop scaling
    scale: true,
    // set 'false' to stop glitch blending
    blend: true,
    // select blend mode type
    blendModeType: 'difference',
    // set min time for glitch 1 elem
    glitch1TimeMin: 800,
    // set max time for glitch 1 elem
    glitch1TimeMax: 1200,
    // set min time for glitch 2 elem
    glitch2TimeMin: 500,
    // set max time for glitch 2 elem
    glitch2TimeMax: 800
  });
});
