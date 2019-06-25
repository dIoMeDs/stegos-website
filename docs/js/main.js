
// window.devicePixelRatio
$(document).ready(function () {

    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() ===
            "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' &&
            safari.pushNotification));

    $.browser = {};
    $.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase())&&!/webkit/.test(navigator.userAgent.toLowerCase());
    $.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());
    $.browser.opera = /opera/.test(navigator.userAgent.toLowerCase());
    $.browser.msie = /msie/.test(navigator.userAgent.toLowerCase());
    $.browser.safari = /safari/.test(navigator.userAgent.toLowerCase());
    $.iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;


    var indicator_btns = $('.indicator_btn');
    indicator_btns.on('click', linkScroll);
    var current_indicator_ix = 0;

    function linkScroll() {

        for(var ix = 0; ix < indicator_btns.length; ix++){
            if(indicator_btns[ix] == this){
                changeCurrentIndicator(ix);
                break;
            }
        }
        animScroll();
        return false;
    }
///______________________________________________________________________________   
    $('.menu_link').on('click', menuLink);
    $('.scroll_link').on('click', menuLink);
    
    function menuLink() {
        for(var ix = 0; ix < indicator_btns.length; ix++){
            if(indicator_btns[ix].firstElementChild.className == this.firstElementChild.className){
                changeCurrentIndicator(ix);
                break;
            }
            else if(ix == indicator_btns.length - 1) {
                animScrollByOffset($('#'+this.firstElementChild.className)[0].offsetTop, 1200);
                return false;
            }
        }
        animScroll();
        return false;
    }
    
///______________________________________________________________________________
    function animScroll() {
        animScrollByOffset($('#'+indicator_btns[current_indicator_ix].firstElementChild.className)[0].offsetTop, 1200);
    }
    function animScrollByOffset(offset, time) {
        if ($.browser.safari && isSafari || $.iOS) {
            $('body').animate({ scrollTop: offset }, time);
        } else {
            $('html').animate({ scrollTop: offset }, time);
        }
    }
///______________________________________________________________________________

    $('.indicator_arrow_up').on('click', upScroll);
    $('.indicator_arrow_down').on('click', downScroll);

    function upScroll() {
        if(current_indicator_ix > 0){
            changeCurrentIndicator(current_indicator_ix - 1);
            animScroll();
        }
        return false;
    }
    function downScroll() {
        if(current_indicator_ix < indicator_btns.length - 1){
            changeCurrentIndicator(current_indicator_ix + 1);
            animScroll();
        }
        return false;
    }

///______________________________________________________________________________


    function changeCurrentIndicator(newIx) {
        indicator_btns[current_indicator_ix].classList.remove('active');
        current_indicator_ix = newIx;
        indicator_btns[current_indicator_ix].classList.add('active');
    }


    function checkNeedIndicatorUpdateByScrollY(scrollY) {
        for(var ix = 0; ix < indicator_btns.length; ix++){
            var offTop = $('#'+indicator_btns[ix].firstElementChild.className)[0].offsetTop;

            if(offTop >  scrollY){
                if(ix > 0 && current_indicator_ix != ix - 1 ){
                    changeCurrentIndicator(ix - 1);
                }
                else if(ix == 0 && current_indicator_ix != 0 ){
                    changeCurrentIndicator(0);
                }
                return;
            }

            if(ix == indicator_btns.length - 1){
                if(current_indicator_ix != ix){
                    changeCurrentIndicator(ix);
                }
            }
        }
    }


    window.onscroll = function() {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        checkNeedIndicatorUpdateByScrollY(scrolled);
    };

//_______________________________________________________________________________________

    $('.main_menu .lang_block').on('click', toggleLangBlockMainMenu);

    function toggleLangBlockMainMenu() {
        console.log('asdasdas');
        $('.main_menu .inner_lang_block').toggleClass('visible');
    }
    
    $('body').on('click', function (e) {
       if (!e.target.closest('.lang_block')) $('.main_menu .inner_lang_block').removeClass('visible');
    });


    $('#main_header .lang_block').on('click', toggleLangBlockMainHeader);

    function toggleLangBlockMainHeader() {
        $('#main_header .inner_lang_block').toggleClass('visible');
    }

    $('body').on('click', function (e) {
        if (!e.target.closest('.lang_block')) $('#main_header .inner_lang_block').removeClass('visible');
    });

//_______________________________________________________________________________________

    var transitionPages = false;
    var mainMenu = $('.main_menu');
    mainMenu.css({'display':'none'});

    $('.m_h_menu_btn').on('click', showMenuPage);
    $('.menu_close_btn').on('click', fadeMenuPage);

    $('.menu_link').on('click', fadeMenuPage);

    function fadeMenuPage() {

        if(transitionPages)
            return;
        transitionPages = true;
        mainMenu.slideToggle(400);
        mainMenu.fadeOut(400);

        setTimeout(offDisObj, 1000);

        function offDisObj() {
            mainMenu.removeClass('open');
            endTransitions();
        }

        $('body').css({'height':'auto', 'overflow-y':'auto'});
    }

    function showMenuPage() {

        if(transitionPages)
            return;
        transitionPages = true;
        mainMenu.addClass('open');
        mainMenu.slideToggle(800);
        mainMenu.fadeIn(600);
        setTimeout(offDis, 1000);

        $('body').css({'height':'100vh', 'overflow-y':'hidden'});

        function offDis() {

            endTransitions();
        }

    }

    function endTransitions() {
        transitionPages = false;
    }

//_______________________________________________________________________________________

    var video_cont = $('#video_sector');
    video_cont.css({'display':'none'});
    var openWinY;

    $('.video_cont_open_btn').on('click', open_video_cont);
    $('.video_cont_close_btn').on('click', close_video_cont);

    function close_video_cont() {
        video_cont.css({'display':'none'});
        $('body').css({'height':'auto', 'overflow-y':'auto', 'position':'relative', 'top': 'auto'});
        animScrollByOffset(openWinY, 0);
    }

    function open_video_cont() {
        video_cont.css({'display':'block'});
        openWinY = window.scrollY;
        $('body').css({'position':'fixed', 'top': '-'+openWinY+'px'});
    }


//_______________________________________________________________________________________

    $('.code_link').on('click', function () {
        event.preventDefault();
        if ($(this).hasClass('opened')) {
            $(this).removeClass('opened');
            $(this).children('.code_link_box').hide();
        } else {
            $(this).addClass('opened');
            $(this).children('.code_link_box').show();
        }
    });

});

