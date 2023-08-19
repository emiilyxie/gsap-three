window.onload = function() {

  // set up html elements
  let body = document.body;
  let container = document.getElementsByClassName("container")[0];
  let container2 = container.cloneNode(true);
  let container3 = container.cloneNode(true);
  body.appendChild(container2);
  body.appendChild(container3);

  // animate them

  let animateText = (container, i) => {
    let list = container.getElementsByClassName("list")[0];
    let clone = list.cloneNode(true);

    container.appendChild(clone);
    let offsetWidth = list.offsetWidth;

    let tl = gsap.timeline({ defaults: { duration: 15 }, repeat: -1});
    tl.fromTo([list, clone], {x: 0}, { x: -offsetWidth, ease: Linear.easeNone});
    tl.set(list, {x: offsetWidth, duration: 0});
    tl.to(clone, { x: -2 * offsetWidth, ease: Linear.easeNone});
    tl.to(list, { x: 0, ease: Linear.easeNone}, "<");

    if (i % 2 == 1) {
      tl.reverse(0);
    }
  }

  document.querySelectorAll(".container").forEach((container, i) => {
    animateText(container, i);
  });

}