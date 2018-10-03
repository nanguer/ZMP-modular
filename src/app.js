import { TimelineMax, TweenMax } from 'gsap';
import $ from 'jquery';
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
  subtitlesDisappear,
  bigLogoSwipe,
  historiaBlock,
  uslugiBlock,
  kontaktBlock,
  portfolioBlock
} from './gsap';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

var delayHome = 2.8;

$('.sidebar').on('click', '#historia-option', function() {
  active.t3 = true;
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
});
$('.sidebar').on('click', '#services-option', function() {
  active.t4 = true;
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
});
$('.sidebar').on('click', '#kontakt-option', function() {
  active.t5 = true;
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
  bigLogoSwipe.tweenTo('0', {
    delay: delay
  });
  subtitlesDisappear.tweenTo('0', {
    delay: delayHome
  });
  active.t1 = false;
});
