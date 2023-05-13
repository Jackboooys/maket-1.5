const slider = document.querySelector('.brands__swiper');

let mySwiper;

function mobileSlider() {
    if (window.innerWidth < 767 && slider.dataset.mobile == 'false') {
        mySwiper = new Swiper(slider, {
            slidesPerView: 1.3,
            spaceBetween: 16,
            wrapperClass: 'brands__swiper-wrapper',
            slideClass: 'brands__swiper-slide',
            pagination: {
                el: '.pagination',
                clickable: true,
            },
            breakpoints: {
                480: {
                    slidesPerView: 2,
                },

                720: {
                    slidesPerView: 3,
                }
            }
        });

        slider.dataset.mobile = 'true';
    }

    if (window.innerWidth > 767) {
        slider.dataset.mobile = 'false';
        
        if (slider.classList.contains('swiper-initialized')) {
         mySwiper.destroy();   
        }
        
    }
}

mobileSlider();

window.addEventListener('resize', () => {
    mobileSlider();
    })
    
    
    let img = document.querySelector('.btn__open-img');
    let swiperW = document.querySelector('.brands__swiper');    
    let btn = document.querySelector('.btn__open');

    btn.addEventListener('click', function(evt){ 
      evt.preventDefault();
      if (swiperW.classList.contains('over')) {

        swiperW.classList.remove('over');
        document.querySelector('.text').textContent="Показать все";
        img.classList.remove('arrows_rotate');
        img.classList.add('arrows_revers');      
      
      }else{

      swiperW.classList.add('over');
      document.querySelector('.text').textContent="Скрыть";
      img.classList.add('arrows_rotate');
      img.classList.remove('arrows_revers');
      }
    })