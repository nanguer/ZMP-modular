import { TweenMax, Expo } from 'gsap';
import {
  delay,
  disappearSubtitles,
  disappearHistoria,
  disappearUslugi,
  disappearKontakt,
  displayService,
  showSection,
  stopGlitch
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
import 'normalize.css/normalize.css';
import './styles/styles.scss';
// import './particles.min.js';
// import './particles-conf.js';

var delayHome = 2.8;
let target;
let bottom = {
  events: '-5rem',
  sound: '-7rem',
  oswietlenie: '-4rem',
  ts: '-2rem',
  threed: '-9rem'
};

$('.sidebar').on('click', '#historia-option', function() {
  active.t3 = true;
  stopGlitch();
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
  stopGlitch();
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
  stopGlitch();
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
  if (active.t5) {
    active.t5 = false;
    kontaktBlock.reverse();
    portfolioBlock.play();
  } else {
    portfolioBlock.play();
  }
});
$('.portfolio-sidebar').on('click', '.close-btn', function() {
  active.t6 = false;
  portfolioBlock.reverse();
});
$('.home-icon, #home-option').click(function() {
  $(this)
    .children('.number')
    .addClass('selected');
  $('.logo').removeClass('stopped');
  $('container-home').css('animation-play-state', 'running');
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
  displayService(target);
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
