function flipCard(card) {
  card.classList.toggle("flipped");
}
// timeline
document.addEventListener("DOMContentLoaded", () => {
  const timelineItems = document.querySelectorAll(".main-timeline .timeline");

  function revealItems() {
    timelineItems.forEach((item) => {
      const yearElement = item.querySelector(".year");
      yearElement.addEventListener("mouseenter", () => {
        item.classList.add("show");

document.addEventListener("DOMContentLoaded", function () {
  // Sidebar navigation
  const sidenavLinks = document.querySelectorAll(".sidenav-link");
  const sections = document.querySelectorAll("section");
  const buttons = document.querySelectorAll(".sidenav-button");

  sidenavLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1); // Get the target section id
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        // Toggle the class to expand or collapse the section
        targetSection.classList.toggle("expanded");

        // If the section is expanded, scroll to it
        if (targetSection.classList.contains("expanded")) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      const targetSection = document.getElementById(targetId);

      // Hide all sections
      sections.forEach((section) => {
        section.style.display = "none";
      });

      // Show the clicked section
      targetSection.style.display = "block";

      // Add 'active' class to the clicked button
      buttons.forEach((btn) => {
        btn.classList.remove("active");
      });
      button.classList.add("active");

      // Scroll to the clicked section
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Add active class to sidebar links when scrolling
  window.addEventListener("scroll", () => {
    let currentSection = null;

    for (const section of sections) {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        currentSection = section.id;
        break;
      }
    }

    sidenavLinks.forEach(link => link.classList.remove("active"));

    if (currentSection) {
      const correspondingLink = document.querySelector(`.sidenav-link[href="#${currentSection}"]`);
      if (correspondingLink) {
        correspondingLink.classList.add("active");
      }
    }
  });

  // Initialize Swiper for your slideshow (if needed)
  var mySwiper = new Swiper(".swiper", {
    autoHeight: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    speed: 500,
    direction: "horizontal",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar"
    },
    loop: false,
    effect: "slide",
    spaceBetween: 30,
    on: {
      init: function () {
        $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
        $(".swiper-pagination-custom .swiper-pagination-switch").eq(0).addClass("active");
      },
      slideChangeTransitionStart: function () {
        $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
        $(".swiper-pagination-custom .swiper-pagination-switch").eq(mySwiper.realIndex).addClass("active");
      }
    }
  });

  $(".swiper-pagination-custom .swiper-pagination-switch").click(function () {
    mySwiper.slideTo($(this).index());
    $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
    $(this).addClass("active");
  });

});




