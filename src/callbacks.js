import { TimelineMax, TweenMax, Expo } from 'gsap';
import {
  active,
  bigLogoSwipe,
  historiaBlock,
  uslugiBlock,
  uslugiIcons,
  subtitlesDisappear,
  kontaktBlock,
  portfolioBlock,
  servicesDetails,
  stripes,
  varConsole
} from './gsap';
import $ from 'jquery';

let target;
var delay = 0;
var delayHome = 2.8;
let bottom = {
  events: '-5rem',
  sound: '-7rem',
  oswietlenie: '-4rem',
  ts: '-2rem',
  threed: '-9rem'
};

function closePortfolio() {
  active.t6 = false;
  portfolioBlock.reverse();
}

function closeSidebarsIfActives(event) {
  let servSidebar = $('.serv-sidebar');
  let portSidebar = $('.portfolio-sidebar');
  if (
    !servSidebar.is(event.target) &&
    servSidebar.has(event.target).length === 0
  ) {
    closeServices();
  }
  if (
    !portSidebar.is(event.target) &&
    portSidebar.has(event.target).length === 0
  ) {
    closePortfolio();
  }
}

function disappearSubtitles() {
  delay = 0;
  subtitlesDisappear.play();
  $('#home-option')
    .children('.number')
    .removeClass('selected');
  active.t1 = true;
}

function disappearHistoria() {
  delay = 0.7;
  historiaBlock.reverse();
  $('#historia-option')
    .children('.number')
    .removeClass('selected');
  active.t3 = false;
}

function disappearUslugi() {
  delay = 0.7;
  uslugiIcons.reverse();
  varConsole.reverse();
  uslugiBlock.reverse();
  $('#services-option')
    .children('.number')
    .removeClass('selected');
  active.t4 = false;
}

function disappearKontakt() {
  delay = 1.5;
  kontaktBlock.reverse();
  $('#kontakt-option')
    .children('.number')
    .removeClass('selected');
  active.t5 = false;
}

function goHome(select) {
  select.children('.number').addClass('selected');
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
}

function openPortfolio() {
  active.t6 = true;
  if (active.t5) {
    active.t5 = false;
    kontaktBlock.reverse();
    portfolioBlock.play();
  } else {
    portfolioBlock.play();
  }
}

function openServices(e) {
  active.t7 = true;
  target = e.delegateTarget.id;
  displayService(target);
  TweenMax.to(`#${target}`, 0.5, {
    bottom: bottom[target],
    ease: Expo.easeInOut
  });
}

function closeServices() {
  active.t7 = false;
  servicesDetails.reverse();
  TweenMax.to(`#${target}`, 0.5, {
    bottom: '-11rem',
    ease: Expo.easeInOut,
    delay: 0.5
  });
}

function showSection(section) {
  section.play();
  if (section === uslugiBlock) {
    varConsole.play();
    uslugiIcons.play();
  }
}

function displayService(target) {
  $('.sound-template').css('display', 'none');
  $('.oswietlenie-template').css('display', 'none');
  $('.ts-template').css('display', 'none');
  $('.threed-template').css('display', 'none');
  $('.events-template').css('display', 'none');
  $(`.${target}-template`).css('display', 'block');
}

function stopGlitch() {
  $('.logo').addClass('stopped');
}

export {
  closeServices,
  closeSidebarsIfActives,
  closePortfolio,
  openServices,
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
};
