gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

// scene 1
const cSmoke = document.querySelectorAll("#c-smoke circle");
const lfSmoke = document.querySelectorAll("#lf-smoke circle");
const rtSmoke = document.querySelectorAll("#rt-smoke circle");
const scene1 = gsap.timeline();
const cloudSpeed = 100;

gsap.set(cSmoke, {
  transformOrigin: "50% 0",
  scale: 0.4,
});

gsap.set(lfSmoke, {
  transformOrigin: "100% 50%",
  scale: 0.4,
});

gsap.set(rtSmoke, {
  transformOrigin: "0 50%",
  scale: 0.4,
});

gsap.set("#fire", {
  transformOrigin: "50% 0",
  scale: 0.25,
});

gsap.set("#rocket", {
  transformOrigin: "50% 50%",
});

ScrollTrigger.create({
  animation: scene1,
  trigger: ".scrollElement",
  start: "top top",
  end: "+=3000",
  scrub: 3,
});

ScrollTrigger.create({
  animation: scene1,
  trigger: ".scrollElement",
  start: "top top",
  end: "+=10000",
  scrub: 3,
});

scene1
  .add("preStart")
  .to("#c-smoke .ft-smoke circle", {
    opacity: 1,
    scale: 1,
    stagger: 0.2,
  })
  .to(
    "#rt-smoke .ft-smoke circle",
    {
      opacity: 1,
      scale: 1,
      stagger: 0.1,
    },
    `preStart+=0.1`
  )
  .to(
    "#lf-smoke .ft-smoke circle",
    {
      opacity: 1,
      scale: 1,
      stagger: 0.1,
    },
    `preStart+=0.1`
  )
  .add("1stSmokeDismiss")
  .to(
    "#rt-smoke .ft-smoke circle",
    {
      opacity: 0,
      stagger: 0.1,
    },
    "1stSmokeDismiss"
  )
  .to(
    "#lf-smoke .ft-smoke circle",
    {
      opacity: 0,
      stagger: 0.1,
    },
    "1stSmokeDismiss"
  )
  .to(
    "#lf-smoke .bk-smoke circle",
    {
      opacity: 1,
      scale: 1,
      stagger: 0.2,
    },
    ">-1.2"
  )
  /* 2nd round */ .to(
    "#rt-smoke .bk-smoke circle",
    {
      opacity: 1,
      scale: 1,
      stagger: 0.2,
    },
    "<"
  )
  .to("#lf-smoke .bk-smoke circle", {
    opacity: 0,
    stagger: 0.2,
  })
  .to(
    "#rt-smoke .bk-smoke circle",
    {
      opacity: 0,
      stagger: 0.2,
    },
    "<"
  )
  /* 3rd round */ .to(
    "#lf-smoke .mid-smoke circle",
    {
      opacity: 1,
      scale: 1,
      stagger: 0.2,
    },
    ">-1.2"
  )
  .to(
    "#rt-smoke .mid-smoke circle",
    {
      opacity: 1,
      scale: 1,
      stagger: 0.2,
    },
    "<"
  )
  .to(
    "#c-smoke .ft-smoke circle",
    {
      opacity: 0,
      stagger: 0.2,
    },
    ">-1.2"
  )
  .to(
    "#lf-smoke .mid-smoke circle",
    {
      opacity: 0,
      stagger: 0.2,
    },
    "<"
  )
  .to(
    "#rt-smoke .mid-smoke circle",
    {
      opacity: 0,
      stagger: 0.2,
    },
    "<"
  )
  /* launch */ .add("launch", ">-1.7")
  .to(
    "#fire",
    {
      opacity: 1,
      scale: 1,
    },
    "launch"
  )
  .to(
    "#ground",
    {
      y: 250,
      duration: 3,
      ease: "power1.in",
    },
    "launch"
  )
  .set("#cloud-1", {
    opacity: 1,
    y: -cloudSpeed * 3,
  })
  .set("#cloud-2", {
    opacity: 1,
    y: -cloudSpeed * 3,
  })
  .set("#cloud-3", {
    opacity: 1,
    y: -cloudSpeed * 2,
  })
  .set("#cloud-4", {
    opacity: 1,
    y: -cloudSpeed * 4,
  })
  .add("cloudStart", ">+2")
  .to(
    "#cloud-1",
    {
      y: cloudSpeed * 9,
      duration: 5,
    },
    "cloudStart"
  )
  .to(
    "#cloud-4",
    {
      y: cloudSpeed * 6,
      duration: 10,
    },
    "<+0.2"
  )
  .to(
    "#cloud-3",
    {
      y: cloudSpeed * 9,
      duration: 8,
    },
    "cloudStart+=1.2"
  )
  .to(
    "#cloud-2",
    {
      y: cloudSpeed * 9,
      duration: 5,
    },
    "cloudStart+=2.2"
  )
  .to(
    "#rocket",
    {
      y: -100,
      duration: 3,
    },
    ">-1"
  )
  .to("#rocket", {
    scale: 2.3,
    duration: 6,
  })
  .to(
    "#stop2",
    {
      attr: {
        offset: 1,
      },

      duration: 6,
    },
    "<"
  )
  .to(
    "#stop1",
    {
      attr: {
        offset: 1,
      },

      duration: 4,
    },
    ">-2"
  )
  .to("#stars", {
    opacity: 0.55,
  });

gsap.to("#text", {
  opacity: 0,
  y: 100,
  scrollTrigger: {
    trigger: ".scrollElement",
    start: "top top",
    end: "+=500",
    scrub: 3,
  },
});

// scene2
const scene2 = gsap.timeline();
ScrollTrigger.create({
  animation: scene2,
  trigger: ".scrollElement",
  start: "top+=10000 top",
  end: "+=10000",
  scrub: 3,
});

gsap.set("#earth", {
  transformOrigin: "50% 50%",
  scale: 3,
  y: 1000,
  opacity: 1,
});

scene2
  .to("#stars", {
    opacity: 0.55,
  })
  .to(
    "#rocket",
    {
      scale: 0.3,
      duration: 2,
    },
    ">+2"
  )
  .to(
    "#earth",
    {
      y: 0,
      scale: 1,
      duration: 2,
    },
    ">-1.5"
  )
  .to(
    "#rocket",
    {
      duration: 10,
      motionPath: {
        path: "#track",
        align: "self",
        autoRotate: 90,
      },
    },

    ">-1"
  );
