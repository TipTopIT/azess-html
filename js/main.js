$(function(){


  // $('.animate-block').addClass('animate-block-active');

    // scroll page
    $(".wrap").onepage_scroll({
        sectionContainer: "section",
        easing: "ease-in",
        animationTime: 500,
        pagination: false,
        updateURL: true,
        loop: true,
        keyboard: true,
        responsiveFallback: false,
        direction: "horizontal",
        afterMove: function (index) {
            let section =  $(".wrap").children().eq(index-1);

            if(section.hasClass('animate-block') && !section.hasClass('animate-block-active'))
            {
               section.addClass('animate-block-active');
            }

        }
    });

    // top menu collapse
    $('#top-menu').on('show.bs.collapse',function () {
        $('header .hamburger').addClass('is-active');
        $('header').addClass('top-menu-open');
    }).on('hide.bs.collapse',function () {
        $('header').removeClass('top-menu-open');
        $('header .hamburger').removeClass('is-active');
    });

    // select 2
    $('.select2').select2({
        width: '100%',
        minimumResultsForSearch: -1
    });


    // input type file
    $('.form-group input[type=file]').each(function () {
        let input = $(this),
            block = input.closest('div.form-group'),
            btn, text;

        if(input.attr('placeholder') != undefined){
            text = input.attr('placeholder')
        } else {
            text = 'Выберите файл';
        }

        btn = $('<a/>').text(text).on('click',function () {
           input.click();
           return false;
        });
        input.on('change',function () {
            let val = input.val(),
                fileName = val.split('/').pop().split('\\').pop();
            console.log(val);
            if(val != ''){
                btn.text(fileName);
            } else {
                btn.text(input.attr('placeholder'));
            }

        });
        block.append(btn);
    });

    // slider
    $('.events').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
    });


});