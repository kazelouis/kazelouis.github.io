$(document).ready(function() {
    // When the image is clicked, show the modal
    $("#popup-trigger").click(function() {
        $("#video-modal").css("display", "block");
    });

    // When the user clicks on <span> (x), close the modal
    $(".close").click(function() {
        $("#video-modal").css("display", "none");
    });

    // When the user clicks anywhere outside of the modal, close it
    $(window).click(function(event) {
        if (event.target == $("#video-modal")[0]) {
            $("#video-modal").css("display", "none");
        }
    });
});
