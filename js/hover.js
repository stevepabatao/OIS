$('.button_background').live('mouseover', function () {
    $(this).addClass('button_background_hover_state');
    $(this).find('.button_arrow').addClass('button_arrow_hover_state');
});
$('.button_background').live('mouseout', function () {
    $(this).removeClass('button_background_hover_state');
    $(this).find('.button_arrow').removeClass('button_arrow_hover_state');
});

$('#announce_container').click(function () {
    $(this).slideUp();
})