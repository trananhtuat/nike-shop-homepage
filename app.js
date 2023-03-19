const heroSwiper = new Swiper(
  ".hero__swiper",
  {
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  }
);

const topProductSwiper = new Swiper(
  ".top-product__swiper",
  {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      600: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      }
    }
  }
);

const topProductSwiperBtn = document.querySelector("#top-product__swiper__btn");

topProductSwiperBtn.querySelector(".btn-next").addEventListener("click", () => {
  topProductSwiper.slideNext();
});

topProductSwiperBtn.querySelector(".btn-prev").addEventListener("click", () => {
  topProductSwiper.slidePrev();
});

const headerContent = document.querySelector("#header__content");

const showMenuClass = "show-menu";

document.querySelector("#btn-close-menu").addEventListener("click", () => {
  headerContent.classList.remove(showMenuClass);
});

document.querySelector("#btn-open-menu").addEventListener("click", () => {
  headerContent.classList.add(showMenuClass);
});