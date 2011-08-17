// Affiliate Quiz Section //
function loaderCont01() {
    $('#copyoxcont01').html('<div id="preloader01"><img src="images/ajax-loader.gif" alt="" /> <span>Loading Contents</span></div>');
};
function loaderCont02() {
    $('#copyoxcont02').html('<div id="preloader01"><img src="images/ajax-loader.gif" alt="" /> <span>Loading Contents</span></div>');
};
$('.btnbacktoaffvideos').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('extras.html #affiliatevideocont');
    $('#affiliate_videos').addClass('btnnewclicked');
    $('#affiliate_benchmarks, #affiliate_tools').removeClass('btnnewclicked');
});
$('#btnaffiliatequiz01').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatequiz.html #affiliatequiz01');
    $('#affiliate_videos').addClass('btnnewclicked');
    $('#affiliate_benchmarks, #affiliate_tools').removeClass('btnnewclicked');
});
$('#btnaffiliatequiz02').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliateanswers.html #affquizanswers02');
    $('#affiliate_videos').addClass('btnnewclicked');
    $('#affiliate_benchmarks, #affiliate_tools').removeClass('btnnewclicked');
});
$('#btnaffiliatequiz03').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatequiz.html #affiliatequiz03');
    $('#affiliate_videos').addClass('btnnewclicked');
    $('#affiliate_benchmarks, #affiliate_tools').removeClass('btnnewclicked');
});
$('#btnaffiliatequiz08').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatequiz.html #affiliatequiz08');
    $('#affiliate_videos').addClass('btnnewclicked');
    $('#affiliate_benchmarks, #affiliate_tools').removeClass('btnnewclicked');
});

function myCertficate() {
    window.open("images/certificateS.jpg", "myWindow", 
"status = 1, height = 500, width = 800, resizable = 0" )
};
