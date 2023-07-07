"use script";

{
  const open = document.querySelector(".openbtn1");
  const navi = document.getElementById("navi");

  open.addEventListener("click", () => {
    open.classList.toggle("active");
    navi.classList.toggle("active");
  });
}

{
  const fadeInTarget = document.querySelectorAll(".fade-in");

  window.addEventListener("scroll", () => {
    for (let i = 0; i < fadeInTarget.length; i++) {
      const rect = fadeInTarget[i].getBoundingClientRect().top;
      const scroll = window.pageYOffset || document.documentElement.scrollTop;
      const offset = rect + scroll;
      const windowHeight = window.innerHeight;
      if (scroll > offset - windowHeight + 150) {
        fadeInTarget[i].classList.add("scroll-in");
      }
    }
  });
}

{
  window.addEventListener("scroll", () => {
    const headder = document.getElementById("header");
    const scroll = window.pageYOffset;
    if (scroll > 520) {
      header.classList.add("show");
    } else {
      header.classList.remove("show");
    }
  });
}

{
  const gallery_position = document.getElementById("gallery");
  const access_position = document.getElementById("access");
  const slide_btn = document.getElementById("slide-btn");

  window.addEventListener("scroll", () => {
    const rect = gallery_position.getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    const rect2 = access_position.getBoundingClientRect().top;
    const offset2 = rect2 + scroll;
    if (window.innerWidth > 900) {
    if (scroll > offset - windowHeight) {
      if (scroll < offset2 - windowHeight) {
        slide_btn.classList.add("show");
      } else {
        slide_btn.classList.remove("show");
      }
    } else {
      slide_btn.classList.remove("show");
    }}
  });
}

{
  const access_position = document.getElementById("access");
  const contact_position = document.getElementById("contact");
  const bg = document.querySelector(".bg");

  window.addEventListener("scroll", () => {
    const rect = access_position.getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight;
    const rect2 = contact_position.getBoundingClientRect().top;
    const offset2 = rect2 + scroll;
    if (scroll > offset - windowHeight) {
      if (scroll < offset2 - windowHeight) {
        bg.classList.add("show");
      } else {
        bg.classList.remove("show");
      }
    } else {
      bg.classList.remove("show");
    }
  });
}

{
  const mainvisual = document.querySelector(".item");

  window.addEventListener("scroll", () => {
    const scroll = window.scrollTop();
    if (window.innerWidth > 900) {
      mainvisual.css({
        'width': 100/3 + scroll/10 + '%'
      });
    } else {
      mainvisual.css({
        'width': 100 - scroll/10 + '%'
      });
    }
  });
}

