__webpack_public_path__ = './dist/';
let apiKey;

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import './particles.min.js';
import './particles-conf.js';

lazyLoadChunk();

function lazyLoadChunk() {
  import(/* webpackChunkName: "callbacks" */ './callbacks').then(module => {
    $('.sidebar').on('click', '#historia-option', function() {
      module.openHistory($(this));
    });
    $('.hambHistoria').click(function() {
      $('input').prop('checked', false);
      module.openHistory($(this));
    });
    $('.sidebar').on('click', '#services-option', function() {
      module.openServicesPage();
    });
    $('.hambServices').click(function() {
      $('input').prop('checked', false);
      module.openServicesPage();
    });
    $('.sidebar').on('click', '#kontakt-option', function() {
      module.openKontakt($(this));
    });
    $('.hambKontakt').click(function() {
      $('input').prop('checked', false);
      module.openKontakt($(this));
    });
    $('.sidebar').on('click', '.portfolio-menu', function() {
      module.openPortfolio();
    });
    $('.hambPortfolio').click(function() {
      $('input').prop('checked', false);
      module.openPortfolio();
    });
    $('.portfolio-sidebar').on('click', '.close-btn', function() {
      module.closePortfolio();
    });
    $('.home-icon, #home-option, .hambHome').click(function() {
      $('input').prop('checked', false);
      module.goHome($(this));
    });

    $('.service__icon-container').on('click', '.services-link', function(e) {
      module.openServices(e);
    });

    $('.serv-sidebar').on('click', '.close-btn-right', function() {
      module.closeServices();
    });

    $(document).mouseup(function(event) {
      module.closeSidebarsIfActives(event);
    });
  });
}
