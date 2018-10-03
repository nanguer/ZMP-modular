import { TimelineMax, TweenMax } from 'gsap';
import {
  active,
  historiaBlock,
  uslugiBlock,
  subtitlesDisappear,
  kontaktBlock,
  portfolioBlock
} from './gsap';

var delay = 0;

function disappearSubtitles() {
  delay = 0;
  subtitlesDisappear.play();
  active.t1 = true;
}

function disappearHistoria() {
  delay = 0.7;
  historiaBlock.reverse();
  active.t3 = false;
}

function disappearUslugi() {
  delay = 0.7;
  uslugiBlock.reverse();
  active.t4 = false;
}

function disappearKontakt() {
  delay = 1.5;
  kontaktBlock.reverse();
  active.t5 = false;
}

function showSection(section) {
  section.play();
}

export {
  delay,
  disappearSubtitles,
  disappearHistoria,
  disappearUslugi,
  disappearKontakt,
  showSection
};
