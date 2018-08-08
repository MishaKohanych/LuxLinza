jQuery(document).ready(function ($) {
    $('.slider').slick({
        dots: true
    });
    $('.slider_gifts').slick({
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    });
    $('.slider_sale').slick({
        dots: true,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    });
    $('.slider_items').slick({
        dots: true,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false
                }
            }
            ,
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    });
    $('.list_brand').slick({
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true
                }
            }
            ,
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true
                }
            }
        ]
    });
    $('.list_sotsseti').slick({
        dots: false,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    centerMode: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true
                }
            }
        ]
    });

});

function setEqualHeight(columns)
{
    var tallestcolumn = 0;
    columns.each(
            function ()
            {
                currentHeight = $(this).height();
                if (currentHeight > tallestcolumn)
                {
                    tallestcolumn = currentHeight;
                }
            }
    );
    columns.height(tallestcolumn);
}
$(document).ready(function () {
    setEqualHeight($(".list_items .img"));
    setEqualHeight($(".list_items p"));
    setEqualHeight($(".list_items .list_price"));
});


$("a.mobile_close").click(function (event) {
    event.preventDefault();
    $("#mob_menu").slideUp();
});
$("a.mobile_menu_open").click(function (event) {
    event.preventDefault();
    $("#mob_menu").slideDown();
});