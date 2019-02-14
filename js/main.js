$(function(){


  // $('.animate-block').addClass('animate-block-active');

    // scroll page

  //  if($(".wrap section").length > 1) {
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
                let section = $(".wrap").children().eq(index - 1);

                if (section.hasClass('animate-block') && !section.hasClass('animate-block-active')) {
                    section.addClass('animate-block-active');
                }

            }
        });
  //  }

    if($(".wrap section:first-child").hasClass('animate-block')){
        $(".wrap section:first-child").addClass('animate-block-active');
    }

    // top menu collapse
    $('#top-menu').on('show.bs.collapse',function () {
        $('header .hamburger').addClass('is-active');
        $('header').addClass('top-menu-open');
    }).on('hide.bs.collapse',function () {
        $('header').removeClass('top-menu-open');
        $('header .hamburger').removeClass('is-active');
    });

    // select 2
    $('.select2').each(function () {
        let select = $(this),
            placeholder = select.attr('placeholder'),
            options = {
                width: '100%',
                minimumResultsForSearch: -1,
                allowClear: true
            },
            option = $('<option/>').attr('value','');

        if (placeholder !== undefined) {

            options.placeholder = placeholder;

            select.prepend(option);
            option.prop('selected',true);

        }

        select.select2(options);

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

            if(val != ''){
                btn.text(fileName);
            } else {
                btn.text(input.attr('placeholder'));
            }

        });
        block.append(btn);
    });


    $('[data-toggle="ajax-form"]').on('click',function () {
        let btn = $(this),
            url = btn.data('url'),
            container = $(btn.data('container'));

        $('#ajax-form').addClass('box-modal-active');
        $('body').addClass('modal-open');
    });

    $('body').on('click','.modal-btn-close',function () {
        let btn = $(this),
            modal = btn.closest('.box-modal');

        modal.removeClass('box-modal-active');
        $('body').removeClass('modal-open');
        return false;
    });

    $('body').on('wheel','.box-form',function (event) {

    });

    multiItemSlider('.slider');




});
