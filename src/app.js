import { TweenMax, Expo } from 'gsap';
import {
  openServices,
  openServicesPage,
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
  openHistory,
  openKontakt,
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
  openHistory($(this));
});
$('.sidebar').on('click', '#services-option', function() {
  openServicesPage();
});
$('.sidebar').on('click', '#kontakt-option', function() {
  openKontakt($(this));
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
