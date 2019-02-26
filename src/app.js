__webpack_public_path__ = './dist/';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

// import './particles.min.js';
// import './particles-conf.js';

let lazyLoadChunk = () => {
  import(/* webpackChunkName: "callbacks" */ './callbacks').then(module => {
    console.log(module);
    $('.sidebar').on('click', '#historia-option', function() {
      module.openHistory($(this));
    });
    $('.sidebar').on('click', '#services-option', function() {
      module.openServicesPage();
    });
    $('.sidebar').on('click', '#kontakt-option', function() {
      module.openKontakt($(this));
    });
    $('.sidebar').on('click', '.portfolio-menu', function() {
      module.openPortfolio();
    });
    $('.portfolio-sidebar').on('click', '.close-btn', function() {
      module.closePortfolio();
    });
    $('.home-icon, #home-option').click(function() {
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
};

lazyLoadChunk();
