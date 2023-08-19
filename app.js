let tl = gsap.timeline();

tl.to(".box", { 
  x: "+=200", 
  }
)

tl.to(".box", { 
  y: "+=200" , 
  rotation: 360, 
  scale: 1, 
  stagger: 0.2 
  },
  "<+=75%"
)

