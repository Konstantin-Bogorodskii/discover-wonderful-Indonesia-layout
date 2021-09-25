function smoothScroll(tg, duration) {
  var target = document.querySelector(tg);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.screenX;
  var distance = targetPosition - startPosition - 65;
  var startTime = null;

  function scrollAnimation(currentTime) {
    if (startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    var runAnimation = easeAnimation(
      timeElapsed,
      startPosition,
      distance,
      duration
    );

    window.scrollTo(0, runAnimation);
    if (timeElapsed < duration) requestAnimationFrame(scrollAnimation);
  }

  function easeAnimation(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t + 2) + b;
  }

  requestAnimationFrame(scrollAnimation);
}

const scrollDownLink = document.querySelector(".scroll-down__link");

scrollDownLink.addEventListener("click", (e) => {
  e.preventDefault();
  smoothScroll(".holiday", 2000);
});
