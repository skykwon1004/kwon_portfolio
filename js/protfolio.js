$(function () {

    var fullpageOption = {
        anchors: [
            'main',
            'portfolio01',
            'portfolio02',
            'portfolio03',
            'portfolio04',
            'portfolio05'
        ],

        //navigation: true,
        onLeave: function (origin, destination, direction) {
            //console.log(origin, destination, direction);
            $('.gnb li')
                .eq(destination - 1)
                .addClass('on')
                .siblings()//나말고 형제들
                .removeClass('on')
            $('.section')
                .eq(destination - 1)
                .addClass('on')
                .siblings()
                .removeClass('on')
        },
        //https://github.com/alvarotrigo/fullPage.js/tree/master/lang/korean#fullpagejs 에서 가져옴

        afterRender: function () {
            $('.gnb li')
                .eq(0)
                .addClass('on')
            $('.section')
                .eq(0)
                .addClass('on')
        },
    }

    $('.main').fullpage(fullpageOption);


    // function gnb() {
    //     var gnbHeight = $('.gnb').height();
    //     $('.gnb').css({
    //         transform: `translate(0,${gnbHeight / 2})`
    //     })
    // }
    // gnb();
    // transform 있어서 1px이 2px로 보여서 js로 수정할 때 


    $('.mopen').on('click', function () {
        $(this).toggleClass('on');
        $('.cover').toggleClass('on');
        $('.header').toggleClass('on');
    });


    $('.cover li').on('click', function () {
        $('.cover').removeClass('on');
        $('.mopen').removeClass('on');
        $('.header').removeClass('on');

    });

    $('.cover').on('wheel', function (e) {
        e.stopPropagation();
    });



})