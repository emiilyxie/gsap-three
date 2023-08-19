window.onload = function() {

  let body = document.body;
  let container = document.getElementsByClassName("container")[0];
  let list = document.getElementsByClassName("list")[0];
  let clone = list.cloneNode(true);
  container.appendChild(clone);

  let offsetWidth = list.offsetWidth;
  console.log(offsetWidth)

  let tl = gsap.timeline({ defaults: { duration: 10 }, repeat: -1});

  tl.fromTo([list, clone], {x: 0}, { x: -offsetWidth, ease: Linear.easeNone});
  tl.set(list, {x: offsetWidth, duration: 0});
  tl.to(clone, { x: -2 * offsetWidth, ease: Linear.easeNone});
  tl.to(list, { x: 0, ease: Linear.easeNone}, "<");

  document.addEventListener("click", () => {
    if (tl.paused()) {
      tl.resume();
    }
    else {
      tl.pause();
    }
  });

}