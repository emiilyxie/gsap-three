window.onload = function() {

  // set up html elements
  let body = document.body;
  let container = document.getElementsByClassName("container")[0];
  let additionalElements = 15;
  
  for (let i = 0; i < additionalElements; i++) {
    let containerClone = container.cloneNode(true);
    body.appendChild(containerClone);
  }

  // animate them

  let animateText = (container, i) => {
    let list = container.getElementsByClassName("list")[0];
    let clone = list.cloneNode(true);

    container.appendChild(clone);
    let offsetWidth = list.offsetWidth;
    let speed = 100;

    let tl = gsap.timeline({ defaults: { duration: offsetWidth / speed }, repeat: -1});
    tl.fromTo([list, clone], {x: 0}, { x: -offsetWidth, ease: Linear.easeNone});
    tl.set(list, {x: offsetWidth, duration: 0});
    tl.to(clone, { x: -2 * offsetWidth, ease: Linear.easeNone});
    tl.to(list, { x: 0, ease: Linear.easeNone}, "<");

    if (i % 2 == 1) {
      tl.reverse(0);
    }
  }

  let containers = document.querySelectorAll(".container");
  containers.forEach((container, i) => {
    animateText(container, i);
  });

  ScrollTrigger.batch(containers, { 
    start: "top bottom",
    end: "bottom bottom",
    ease: "power2.in",
    scrub: 1,
    onEnter: (elements, triggers) => {
      gsap.from(elements, {
        opacity: 0, 
        stagger: 0.15});
    }
  })

}