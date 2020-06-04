import { TweenMax, Expo } from "gsap";
import {
  active,
  bigLogoSwipe,
  wholeLogoSwipe,
  historiaBlock,
  uslugiBlock,
  uslugiIcons,
  subtitlesDisappear,
  kontaktBlock,
  euProjektBlock,
  portfolioBlock,
  servicesDetails,
  stripes,
  varConsole,
} from "./gsap";
import $ from "jquery";

let mobile;
let target;
var delay = 0;
var delayHome = 2.8;
let bottom = {
  events: "-5rem",
  sound: "-7rem",
  oswietlenie: "-4rem",
  ts: "-2rem",
  threed: "-9rem",
};

innerWidth > 720 ? (mobile = false) : (mobile = true);

function closePortfolio() {
  active.t6 = false;
  portfolioBlock.reverse();
}

function closeSidebarsIfActives(event) {
  let servSidebar = $(".serv-sidebar");
  let portSidebar = $(".portfolio-sidebar");
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

function disappearSubtitles(comesFrom5) {
  console.log("disappear subtitles");
  delay = 0;
  if (comesFrom5) {
    console.log("comesfrom5");
    subtitlesDisappear.play();
  }
  $("#home-option").children(".number").removeClass("selected");
  active.t1 = true;
}

function disappearHistoria() {
  delay = 0.7;
  historiaBlock.reverse();
  $("#historia-option").children(".number").removeClass("selected");
  active.t3 = false;
}

function disappearUslugi() {
  delay = 0.7;
  uslugiIcons.reverse();
  varConsole.reverse();
  uslugiBlock.reverse();
  $("#services-option").children(".number").removeClass("selected");
  active.t4 = false;
}

function disappearKontakt() {
  delay = 1.5;
  kontaktBlock.reverse();
  $("#kontakt-option").children(".number").removeClass("selected");
  active.t5 = false;
}
function disappearEuProjekt() {
  delay = 1.5;
  euProjektBlock.reverse();
  wholeLogoSwipe.reverse();
  console.log("disappear EU Proj");
  $("#euProject-option").children(".number").removeClass("selected");

  active.t8 = false;
}

function goHome() {
  $("#home-option").children(".number").addClass("selected");
  $(".logo").removeClass("stopped");
  $("container-home").css("animation-play-state", "running");
  if (active.t3) {
    disappearHistoria();
    delayHome = 1;
  } else if (active.t4) {
    disappearUslugi();
    delayHome = 1.5;
  } else if (active.t5) {
    disappearKontakt();
    delayHome = 3;
  } else if (active.t8) {
    disappearEuProjekt();
    delayHome = 1;
  }
  stripes.tweenTo("0", {
    delay: delay * 1.2,
  });
  bigLogoSwipe.tweenTo("0", {
    delay: delay,
  });
  wholeLogoSwipe.tweenTo("0", {
    delay: delay,
  });
  subtitlesDisappear.tweenTo("0", {
    delay: delayHome,
  });
  active.t1 = false;
}

function openHistory(select) {
  active.t3 = true;
  stopGlitch();
  select.children(".number").addClass("selected");
  if (!active.t1 && !active.t8) {
    console.log("disapear subtitle one");
    disappearSubtitles(true);
  } else if (active.t8) {
    disappearEuProjekt();
    setTimeout(() => {
      disappearSubtitles(true);
    }, 1000);
  } else if (active.t4) {
    disappearUslugi();
  } else if (active.t5) {
    disappearKontakt();
  }

  bigLogoSwipe.tweenTo("Z", {
    delay: delay * 1.3,
    ease: Linear.easeOut,
    onComplete: showSection,
    onCompleteParams: [historiaBlock],
  });

  stripes.tweenTo(1.3, {
    delay: delay * 1.3,
    ease: Expo.easeInOut,
  });
}

function openKontakt(select) {
  if (active.t5) return false;
  else {
    console.log("opening services");
    active.t5 = true;
    stopGlitch();
    select.children(".number").addClass("selected");
    if (!active.t1 && !active.t8) {
      disappearSubtitles(true);
    } else if (active.t8) {
      disappearEuProjekt();
      setTimeout(() => {
        disappearSubtitles(true);
      }, 800);
    } else if (active.t3) {
      disappearHistoria();
    } else if (active.t4) {
      disappearUslugi();
    }
    bigLogoSwipe.tweenTo("P", {
      delay: delay,
      onComplete: showSection,
      onCompleteParams: [kontaktBlock],
    });
    stripes.tweenTo(3, {
      delay: delay * 1.2,
      ease: Expo.easeInOut,
    });
  }
}
function openEuProject(select) {
  if (active.t8) return false;
  else {
    console.log("running open project");
    active.t8 = true;
    stopGlitch();
    select.children(".number").addClass("selected");
    $("#home-option").children(".number").removeClass("selected");
    active.t1 = true;
    if (active.t3) {
      disappearHistoria();
      resetAnimations(1.2, 1.5);
    } else if (active.t4) {
      disappearUslugi();
      resetAnimations(1.2, 1);
    } else if (active.t5) {
      disappearKontakt();
      resetAnimations(1.3, 1.3);
    }
    wholeLogoSwipe.tweenTo("title-up", {
      delay: delay * 3,
      onComplete: showSection,
      onCompleteParams: [euProjektBlock],
    });
  }
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
  if (mobile === false) {
    TweenMax.to(`#${target}`, 0.5, {
      bottom: bottom[target],
      ease: Expo.easeInOut,
    });
  }
  servicesDetails.play();
}

function openServicesPage() {
  if (active.t4) return false;
  else {
    console.log("opening services");
    active.t4 = true;
    stopGlitch();
    $("#services-option").children(".number").addClass("selected");
    if (!active.t1 && !active.t8) {
      disappearSubtitles(true);
    } else if (active.t8) {
      disappearEuProjekt();
      setTimeout(() => {
        disappearSubtitles(true);
      }, 800);
    } else if (active.t3) {
      disappearHistoria();
    } else if (active.t5) {
      disappearKontakt();
    }
    bigLogoSwipe.tweenTo(1.5, {
      delay: delay,
      ease: Linear.ease,
      onComplete: showSection,
      onCompleteParams: [uslugiBlock],
    });
    stripes.tweenTo(2, {
      delay: delay * 1.2,
      ease: Expo.easeInOut,
    });
  }
}

function closeServices() {
  active.t7 = false;
  servicesDetails.reverse();
  if (!mobile) {
    TweenMax.to(`#${target}`, 0.5, {
      bottom: "-11rem",
      ease: Expo.easeInOut,
      delay: 0.5,
    });
  }
}

function showSection(section) {
  section.play();
  if (section === uslugiBlock) {
    varConsole.play();
    uslugiIcons.play();
  }
}

function displayService(target) {
  $(".sound-template").css("display", "none");
  $(".oswietlenie-template").css("display", "none");
  $(".ts-template").css("display", "none");
  $(".threed-template").css("display", "none");
  $(".events-template").css("display", "none");
  $(`.${target}-template`).css("display", "block");
}

function stopGlitch() {
  $(".logo").addClass("stopped");
}

function resetAnimations(delayFactor1, delayFactor2) {
  stripes.tweenTo("0", {
    delay: delay + delayFactor1,
  });
  bigLogoSwipe.tweenTo("0", {
    delay: delayFactor2,
  });
  // subtitlesDisappear.tweenTo("0", {
  //   delay: delay + delayFactor2,
  // });
}

export {
  closeServices,
  closeSidebarsIfActives,
  closePortfolio,
  openServices,
  openServicesPage,
  delay,
  disappearSubtitles,
  disappearHistoria,
  disappearUslugi,
  disappearKontakt,
  displayService,
  goHome,
  openHistory,
  openPortfolio,
  openKontakt,
  showSection,
  stopGlitch,
  openEuProject,
};
