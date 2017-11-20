'use strict';

$(function () { 
    
    const slides = $('.section');
    const secondSlide = $('#trailer');
    const fixedContainer = $('.fixed');
    // fixedContainer.html(secondSlide.outerHTML);
    let prev = null;

    $(window).scroll(() => {
        slides.each((i, slide) => {
            const { top, height, bottom } = slide.getBoundingClientRect();
            const isCurrent = top < height && bottom - height > 0;

            if (isCurrent) {
                if (slide !== prev) { // only change once for performance
                    fixedContainer.html(slide.outerHTML)
                    prev = slide;
                    $(slide).css('opacity', 0)
                }
            } else {
                $(slide).removeAttr('style');
            }
        })
    });


    
        setInterval(function(){
          $('.lazy-video:onScreen').each(function(){
             var id = $(this).data('vimeo-id'),
                 iframe = $('');
                 debugger;
                 innerHtml
             iframe.attr('src', "http://player.vimeo.com/video/" + id);
             $(this).replaceWith(iframe);
          });
        }, 1000);
      
        $(document).on("scroll",function(){
            if($(document).scrollTop()>230){
                $(".main-nav").addClass("nav-fix");
            }
            else{
                $(".main-nav").removeClass("nav-fix");
            }
        });
        
});