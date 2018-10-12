import { TimelineMax, TweenMax, Expo } from 'gsap';
import {
  active,
  historiaBlock,
  uslugiBlock,
  uslugiIcons,
  subtitlesDisappear,
  kontaktBlock,
  portfolioBlock,
  varConsole
} from './gsap';
import $ from 'jquery';
var delay = 0;
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

function showSection(section) {
  section.play();
  if (section === uslugiBlock) {
    varConsole.play();
    uslugiIcons.play();
  }
}

export {
  delay,
  disappearSubtitles,
  disappearHistoria,
  disappearUslugi,
  disappearKontakt,
  showSection
};
