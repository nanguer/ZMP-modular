__webpack_public_path__ = "./dist/";
let apiKey;

import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "./particles.min.js";
import "./particles-conf.js";

lazyLoadChunk();

function lazyLoadChunk() {
  import(/* webpackChunkName: "callbacks" */ "./callbacks").then((module) => {
    $(".sidebar").on("click", "#historia-option", function () {
      disableLinks();
      module.openHistory($(this));
    });
    $(".hambHistoria").click(function () {
      $("input").prop("checked", false);
      module.openHistory($(this));
    });
    $(".sidebar").on("click", "#services-option", function () {
      disableLinks();
      module.openServicesPage();
    });
    $(".hambServices").click(function () {
      $("input").prop("checked", false);
      module.openServicesPage();
    });
    $(".sidebar").on("click", "#kontakt-option", function () {
      disableLinks();
      module.openKontakt($(this));
    });
    $(".sidebar").on("click", "#euProject-option", function (e) {
      disableLinks();
      module.openEuProject($(this));
    });
    $("div.euFlag").click(function () {
      disableLinks();
      module.openEuProject($(this));
    });
    $(".hambKontakt").click(function () {
      $("input").prop("checked", false);
      module.openKontakt($(this));
    });
    $(".sidebar").on("click", ".portfolio-menu", function () {
      disableLinks();
      module.openPortfolio();
    });

    $(".hambPortfolio").click(function () {
      $("input").prop("checked", false);
      module.openPortfolio();
    });
    $(".portfolio-sidebar").on("click", ".close-btn", function () {
      module.closePortfolio();
    });
    $(".home-icon, #home-option, .hambHome").click(function () {
      $("input").prop("checked", false);
      module.goHome();
    });

    $(".service__icon-container").on("click", ".services-link", function (e) {
      module.openServices(e);
    });

    $(".grid__box").click(function (e) {
      module.openServices(e);
    });

    $(".serv-sidebar").on("click", ".close-btn-right", function () {
      module.closeServices();
    });

    $(document).mouseup(function (event) {
      module.closeSidebarsIfActives(event);
    });
  });
}

function disableLinks() {
  $("#sidebar , nav.nav").css("z-index", "0");
  setTimeout(() => {
    $("#sidebar").css("z-index", "5");
    $("nav.nav").css("z-index", "7");
  }, 2500);
}
