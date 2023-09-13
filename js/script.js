const { innerHeight } = window;

gsap.from("#zoom-out h2", {
  scale: 50,
  stager: 0.25,
  duration: 3,
  scrollTrigger: {
    trigger: "#zoom-out",
    pin: true,
    end: `+=${innerHeight * 1.3}`,
    scrub: 3,
  },
});

gsap.to("#zoom-in h2", {
  scale: 10,
  stager: 0.25,
  duration: 3,
  scrollTrigger: {
    trigger: "#zoom-in",
    pin: true,
    end: `+=${innerHeight * 1.3}`,
    scrub: 3,
  },
});

console.log("working");

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions: "restart pause resume pause",
  scroller: ".container",
});

gsap.to(".orange div", {
  scrollTrigger: ".orange",
  duration: 5,
  rotation: 360,
  repeat: 0,
  yoyo: true,
});

gsap.to(".violet", {
  scrollTrigger: {
    trigger: ".violet",
    toggleActions: "restart pause reverse pause",
  },
  duration: 5,
  backgroundColor: "#FFA500",
  ease: "none",
});

gsap.to(".animate div", {
  scrollTrigger: ".animate",
  scale: 5,
  repeat: 0,
  yoyo: true,
  ease: "power2",
});
