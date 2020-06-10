import { TimelineMax } from "gsap";
import { waitForFinalEvent, checkVars } from "./callbacks";

var t0 = new TimelineMax(),
  subtitlesDisappear = new TimelineMax({ paused: true }),
  wholeLogoSwipe = new TimelineMax({ paused: true }),
  bigLogoSwipe = new TimelineMax({ paused: true }),
  historiaBlock = new TimelineMax({ paused: true }),
  uslugiBlock = new TimelineMax({ paused: true }),
  kontaktBlock = new TimelineMax({ paused: true }),
  euProjektBlock = new TimelineMax({ paused: true }),
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
    t7: false,
    t8: false,
  },
  displayUslugi = "flex";

//NAVIGATION ANIMATION
t0.to(".subtitles", 0.7, {
  opacity: 1,
  ease: Expo.easeInOut,
});
t0.add("subtitles-appear");
t0.to(
  "#bigLogo",
  0.7,
  {
    opacity: 1,
    scale: 4,
    ease: Expo.easeIn,
  },

  "=-0.7"
);
subtitlesDisappear.to("#header", 0.5, {
  y: -10,
});
subtitlesDisappear.to(
  "#subtitle",
  0.5,
  {
    y: 10,
  },

  "=-0.5"
);
subtitlesDisappear.to(
  ".subtitles",
  0.3,
  {
    opacity: 0,
    ease: Expo.ease,
  },

  "-=0.5"
);
subtitlesDisappear.add("subitlesOut");
active.t2 = true;

wholeLogoSwipe.to(".subtitles", 1, {
  y: "-520",
  opacity: 0,
  ease: Expo.easeInOut,
});
wholeLogoSwipe.to(
  "#bigLogo",
  1,
  {
    y: "-520",
    opacity: 0,
    ease: Expo.easeInOut,
  },
  "-=1"
);
wholeLogoSwipe.add("title-up");

euProjektBlock.to(".section__ue", 0.5, {
  display: "flex",
  opacity: 1,
  top: innerWidth <= 880 ? "10vh" : "5vh",
  delay: 0.5,
  ease: Expo.easeInOut,
});
euProjektBlock.add("section-appear");

bigLogoSwipe.to(
  "#bigLogo",
  0.5,
  {
    opacity: 0.1,
    transform: "scale(12)",
    ease: ExpoScaleEase.config(1, 12),
    left: innerWidth >= 880 ? "450%" : "200%",
    delay: 0.7,
  },
  "-=0.5"
);
stripes.to(".stripes", 3, {
  left: "-500px",
  ease: Expo.easeInOut,
  delay: 0.2,
});
bigLogoSwipe.add("Z");
bigLogoSwipe.to("#bigLogo", 1, {
  left: innerWidth >= 880 ? "-630%" : "-260%",
  ease: Linear.ease,
  delay: 0.5,
});
bigLogoSwipe.add("P");
historiaBlock.to("#historia", 1, {
  display: "flex",
  opacity: 1,
  left: "15vw",
  ease: Expo.easeInOut,
});
uslugiBlock.to("#uslugi", 1, {
  display: displayUslugi,
  opacity: 1,
  left: innerWidth <= 880 ? "0" : "10vw",
  ease: Expo.easeInOut,
});
varConsole.to(".console", 0.5, {
  opacity: 1,
  delay: 1,
  right: 0,
});
uslugiIcons.staggerFrom(
  ".service__icon-container",
  0.5,
  {
    opacity: 0,
    delay: 1.2,
    ease: Expo.easeOut,
  },
  0.2
);
kontaktBlock.to(".map-container", 0.5, {
  //change this to appear/disappear map
  display: "block",
  opacity: 0,
  right: "0",
  ease: Expo.easeInOut,
});
kontaktBlock.to(".kontakt__text", 1.2, {
  opacity: 1,
  x: innerWidth >= 880 ? 175 : 85,
  ease: Expo.easeInOut,
});

portfolioBlock.to(".portfolio-sidebar", 0.6, {
  delay: 0.3,
  display: "flex",
  opacity: 1,
  x: 290,
  ease: Expo.easeInOut,
});

servicesDetails.to(".serv-sidebar", 0.6, {
  delay: 0.3,
  display: "flex",
  opacity: 1,
  right: 0,
  ease: Expo.easeInOut,
});

export {
  active,
  subtitlesDisappear,
  bigLogoSwipe,
  wholeLogoSwipe,
  historiaBlock,
  uslugiBlock,
  kontaktBlock,
  euProjektBlock,
  portfolioBlock,
  servicesDetails,
  stripes,
  uslugiIcons,
  varConsole,
};
