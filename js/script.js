const btnScrollOff = document.querySelector('#scroll-off');
const btnScrollOn = document.querySelector('#scroll-on');
const body = document.body;

function disableScroll() {
    let pagePosition = window.scrollY;
    body.classList.add('disable-scroll');
    body.dataset.position = pagePosition;
    body.style.top = -pagePosition + 'px';
}

function enableScroll() {
    let pagePosition = parseInt(body.dataset.position, 10);
    body.style.top = 'auto';
    body.classList.remove('disable-scroll');
    window.scroll({ top: pagePosition, left: 0 });
    body.removeAttribute('data-position');
}

btnScrollOff.addEventListener('click', (e) => {
    disableScroll();
})
btnScrollOn.addEventListener('click', (e) => {
    enableScroll();
});

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
