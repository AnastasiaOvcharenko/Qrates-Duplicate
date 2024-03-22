const changeImage = function () {
  let sparkles = document.querySelector(".cta-sparkles");
  let dollar = document.querySelector(".cta-dollar");

  let source = document.querySelector(".cta-img").src;
  let nextNum = +source.slice(-5, -4) === 6 ? 1 : +source.slice(-5, -4) + 1;
  document.querySelector(".cta-img").src = `content/vinyl-${nextNum}.png`;

  if (+source.slice(-5, -4) === 6) {
    if (sparkles.style.opacity == 100 && dollar.style.opacity == 0) {
      sparkles.style.opacity = 0;
      dollar.style.opacity = 100;
    } else if (sparkles.style.opacity == 0 && dollar.style.opacity == 100) {
      sparkles.style.opacity = 100;
      dollar.style.opacity = 0;
    }
  }
};

const intervalImage = window.setInterval(changeImage, 800);

const switches = document.querySelector(".artist-switches");
const openArtist = function (e) {
  if (e.target.dataset.background === undefined) return;

  for (el of document.querySelector(".artist-info").children) {
    if (el.dataset.num == e.target.innerHTML)
      el.classList.remove("artist-hide");
    else if (el.dataset.num !== undefined) el.classList.add("artist-hide");
    console.log(el.dataset.num);
  }

  for (el of document.querySelector(".artists-right").children) {
    if (el.dataset.num == e.target.innerHTML)
      el.classList.remove("artist-hide");
    else el.classList.add("artist-hide");
    console.log(el.dataset.num);
  }

  for (el of document.querySelector(".artist-switches").children) {
    if (el.innerHTML == e.target.innerHTML) el.classList.add("active");
    else el.classList.remove("active");
    console.log(el.dataset.num);
  }

  document.querySelector(".artists").style.backgroundColor =
    e.target.dataset.background;
};

switches.addEventListener("click", openArtist);
