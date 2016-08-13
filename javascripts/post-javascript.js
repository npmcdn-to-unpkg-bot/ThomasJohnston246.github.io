$(document).ready(function() {
    $("#my-menu").mmenu({
        navbar: false,
        extensions: ["theme-white", "border-none"]
    });
    var owl = $('#mainCarousel');
    owl.owlCarousel({
        singleItem: true,
        pagination: true,
    });
    $('.rightNavB').click(function() {
        console.log(this);
        owl.trigger('owl.next');
    })
    $('.leftNavB').click(function() {
        console.log(this);
        owl.trigger('owl.prev');
    })
    var wall = new Freewall("#container");
    wall.fitWidth();
    window.onresize = function() {
        wall.fitWidth();
    }
    var searchActivated = false;
    $('#searchIcon').click(function() {
        if (searchActivated == false) {
            searchActivated = true;
            $("#searchIcon").addClass('searchClick');
            var inputElement =
                '<input class="homeInput" type="text" name="fname">'
            $('.icon-linksH').prepend(inputElement);
        } else {
            searchActivated = false;
            $("#searchIcon").removeClass('searchClick');
            var inputElement =
                '<input class="homeInput" type="text" name="fname">'
            $('.homeInput').remove();
        }
    })
});
