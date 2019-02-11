import { TweenMax, Expo } from 'gsap';
import {
  openServices,
  closeServices,
  closeSidebarsIfActives,
  closePortfolio,
  delay,
  disappearSubtitles,
  disappearHistoria,
  disappearUslugi,
  disappearKontakt,
  displayService,
  goHome,
  openPortfolio,
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
  openPortfolio();
});
$('.portfolio-sidebar').on('click', '.close-btn', function() {
  closePortfolio();
});
$('.home-icon, #home-option').click(function() {
  goHome($(this));
});

$('.service__icon-container').on('click', '.services-link', function(e) {
  openServices(e);
  servicesDetails.play();
});

$('.serv-sidebar').on('click', '.close-btn-right', function() {
  closeServices();
});

$(document).mouseup(function(event) {
  closeSidebarsIfActives(event);
});
