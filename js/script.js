// scroll until registration of button TRY NOW
$(document).ready(function () {
    $("#js-btn").on("click", function (e) {
        e.preventDefault();
        const top = $("#registration").offset().top;
        $("html, body").animate({
            scrollTop: top
        }, 500);
    });
});