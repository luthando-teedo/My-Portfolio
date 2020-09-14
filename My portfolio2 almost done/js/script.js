var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });

var logo = document.getItemById("brand").addEventListener('click', function(){
      console.log(123);
});

function change(){
  document.getItemById("work-img").src="../img/pic1.jpg";
};