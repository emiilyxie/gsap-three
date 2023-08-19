let tl = gsap.timeline();

// word stagger in
tl.from(".word", {
  opacity: 0,
  stagger: 0.2, 
});
tl.from(".word", {
  y: (i, elem, target) => { return i % 2 == 0 ? 50 : -50 },
  stagger: 0.2,
  ease: "power2.out"
}, "-=0.5");
// word go down
// page 2 fades in
tl.from(".hero", {
  opacity: 0,
  scale: 1.5
})
// word1word2 slide in
tl.from(".word2", {
  x: "+100%",
  opacity: 0,
  duration: 1.5,
  ease: "circ.out"
})
tl.from(".word1", {
  x: "-100%",
  opacity: 0,
  duration: 1.5,
  ease: "circ.out"
}, "<50%")

// have circle rotate follow mouse
let body = document.querySelector("body");
body.addEventListener("mousemove", (e) => {
  gsap.to("#textCircle", {
    x: (i, el, t) =>  { return e.pageX - el.width.baseVal.value / 2 },
    y: (i, el, t) =>  { return e.pageY - el.height.baseVal.value / 2 },
    duration: 1,
    ease: "power2.out",
  })
})

gsap.to("#textCircle", {
  rotate: 360,
  duration: 5,
  repeat: -1,
  ease: "none"
})