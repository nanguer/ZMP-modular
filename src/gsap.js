import { TimelineMax, TweenMax } from 'gsap';
import {mobile} from './app'

var t0 = new TimelineMax(),
  subtitlesDisappear = new TimelineMax({ paused: true }),
  bigLogoSwipe = new TimelineMax({ paused: true }),
  historiaBlock = new TimelineMax({ paused: true }),
  uslugiBlock = new TimelineMax({ paused: true }),
  kontaktBlock = new TimelineMax({ paused: true }),
  portfolioBlock = new TimelineMax({ paused: true }),
  servicesDetails = new TimelineMax({ paused: true }),
  stripes = new TimelineMax({ paused: true }),
  varConsole = new TimelineMax({ paused: true }),
  uslugiIcons = new TimelineMax({ paused: true }),
  active = {
    t1: false,
    t2: false,
    t3: false,
    t4: false,
    t5: false,
    t6: false,
    t7: false
  },
  bgLeft = '200%',
  bgLeftP = '-260%',
  kontaktLeft = 85,
  usLeft = '10vw',
  displayUslugi='inline';

if (innerWidth > 720) {
  bgLeft = '450%';
  bgLeftP = '-630%';
  kontaktLeft = 175;
  usLeft = '15vw';
  displayUslugi= 'flex';
}

//NAVIGATION ANIMATION
t0.to('.subtitles', 0.7, {
  opacity: 1,
  ease: Expo.easeInOut
});
t0.add('subtitles-appear');
t0.to(
  '#bigLogo',
  0.7,
  {
    opacity: 1,
    scale: 4,
    ease: Expo.easeIn
  },

  '=-0.7'
);
subtitlesDisappear.to('#header', 0.5, {
  y: -10
});
subtitlesDisappear.to(
  '#subtitle',
  0.5,
  {
    y: 10
  },

  '=-0.5'
);
subtitlesDisappear.to(
  '.subtitles',
  0.3,
  {
    opacity: 0,
    ease: Expo.ease
  },

  '-=0.5'
);
active.t2 = true;

bigLogoSwipe.to(
  '#bigLogo',
  0.5,
  {
    opacity: 0.1,
    transform: 'scale(12)',
    ease: ExpoScaleEase.config(1, 12),
    left: bgLeft,
    delay: 0.7
  },
  '-=0.5'
);

stripes.to('.stripes', 3, {
  left: '-500px',
  ease: Expo.easeInOut,
  delay: 0.2
});
bigLogoSwipe.add('Z');
bigLogoSwipe.to('#bigLogo', 1, {
  left: bgLeftP,
  ease: Linear.ease,
  delay: 0.5
});
bigLogoSwipe.add('P');
historiaBlock.to('#historia', 1, {
  display: 'flex',
  opacity: 1,
  left: '15vw',
  ease: Expo.easeInOut
});
uslugiBlock.to('#uslugi', 1, {
  display: displayUslugi,
  opacity: 1,
  left: usLeft,
  ease: Expo.easeInOut
});
varConsole.to('.console', 0.5, {
  opacity: 1,
  delay: 1,
  right: 0
});
uslugiIcons.staggerFrom(
  '.service__icon-container',
  0.5,
  {
    opacity: 0,
    delay: 1.2,
    ease: Expo.easeOut
  },
  0.2
);
kontaktBlock.to('.map-container', 0.5, {
  opacity: 1,
  right: '0',
  ease: Expo.easeInOut
});
kontaktBlock.to('.kontakt__text', 1.2, {
  opacity: 1,
  x: kontaktLeft,
  ease: Expo.easeInOut
});

portfolioBlock.to('.portfolio-sidebar', 0.6, {
  delay: 0.3,
  display: 'flex',
  opacity: 1,
  x: 290,
  ease: Expo.easeInOut
});

servicesDetails.to('.serv-sidebar', 0.6, {
  delay: 0.3,
  display: 'flex',
  opacity: 1,
  right: 0,
  ease: Expo.easeInOut
});

export {
  active,
  subtitlesDisappear,
  bigLogoSwipe,
  historiaBlock,
  uslugiBlock,
  kontaktBlock,
  portfolioBlock,
  servicesDetails,
  stripes,
  uslugiIcons,
  varConsole
};
