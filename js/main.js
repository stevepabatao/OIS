// Main Script //
function loaderCont01() {
    $('#copyoxcont01').html('<div id="preloader01"><img src="images/ajax-loader.gif" alt="" /> <span>Loading Contents</span></div>');
};
function loaderCont02() {
    $('#copyoxcont02').html('<div id="preloader01"><img src="images/ajax-loader.gif" alt="" /> <span>Loading Contents</span></div>');
};
$('#copyoxcont01').load('defaultcopy01.html #defaultcopy01');
$('#affiliatemainbtn').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('defaultcopy01.html #defaultcopy01');
    $('#affiliate_benchmarks, #affiliate_videos, #affiliate_tools').removeClass('btnnewclicked');
});
$('#affiliate_benchmarks').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('defaultcopy01.html #affiliatesteps01');
    $(this).addClass('btnnewclicked');
    $('#affiliate_videos, #affiliate_tools').removeClass('btnnewclicked');
});
$('#affiliate_videos').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('extras.html #affiliatevideocont');
    $(this).addClass('btnnewclicked');
    $('#affiliate_benchmarks, #affiliate_tools').removeClass('btnnewclicked');
});
$('#affiliate_tools').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('defaultcopy01.html #affiliatetools01');
    $(this).addClass('btnnewclicked');
    $('#affiliate_benchmarks, #affiliate_videos').removeClass('btnnewclicked');
});

$('#copyoxcont02').load('defaultcopy01.html #marketingcopy01');
$('#marketingmainbtn').live('click', function () {
    loaderCont02();
    $('#copyoxcont02').load('defaultcopy01.html #marketingcopy01');
    $('#marketing_benchmarks, #marketing_videos, #marketing_tools').removeClass('btnnewclicked');
});
$('#marketing_benchmarks').live('click', function () {
    loaderCont02();
    $('#copyoxcont02').load('defaultcopy01.html #marketingsteps01');
    $(this).addClass('btnnewclicked');
    $('#marketing_videos, #marketing_tools').removeClass('btnnewclicked');
});
$('#marketing_videos').live('click', function () {
    loaderCont02();
    $('#copyoxcont02').load('extras.html #marketingvideocont');
    $(this).addClass('btnnewclicked');
    $('#marketing_benchmarks, #marketing_tools').removeClass('btnnewclicked');
});
$('#marketing_tools').live('click', function () {
    loaderCont02();
    $('#copyoxcont02').load('defaultcopy01.html #marketingtools01');
    $(this).addClass('btnnewclicked');
    $('#marketing_benchmarks, #marketing_videos').removeClass('btnnewclicked');
});

// Affiliate Steps Section //
$('.benchmark_back').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('defaultcopy01.html #affiliatesteps01');
    $('#affiliate_benchmarks').addClass('btnnewclicked');
    $('#affiliate_videos, #affiliate_tools').removeClass('btnnewclicked');
});
$('#stepbtn01').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy01');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn02').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy02');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn03').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy03');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn04').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy04');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn05').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy05');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn06').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy06');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn07').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy07');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn08').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy08');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn09').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy09');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn10').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy10');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn11').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy11');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn12').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy12');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn13').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy13');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn14').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy14');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn15').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy15');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn16').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy16');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn17').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy17');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn18').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy18');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn019').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy19');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn20').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy20');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn21').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy21');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn22').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy22');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn23').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy23');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn24').live('click', function () {
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy24');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn25').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy25');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn26').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy26');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn27').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy27');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn28').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy28');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn29').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy29');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn30').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy30');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn31').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy31');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn32').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy32');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn33').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy33');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn34').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy34');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn35').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy35');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn36').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy36');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn37').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy37');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn38').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy38');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn39').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy39');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn40').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy40');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn41').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy41');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn42').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy42');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn43').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy43');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn44').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy44');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn45').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy45');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn46').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy46');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn47').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy47');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn48').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy48');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn49').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy49');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn50').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy50');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn51').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy51');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn52').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy52');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn53').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy53');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn54').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy54');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn55').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy55');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn56').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy56');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn57').live('click', function () {
    loaderCont01();
    $('#copyoxcont01').load('affiliatecopy.html #affstepsmaincopy57');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});


// Marketing Steps Section //
$('.benchmark_back').live('click', function () {
    loaderCont02();
    $('#copyoxcont02').load('defaultcopy01.html #marketingsteps01');
    $('#affiliate_benchmarks').addClass('btnnewclicked');
    $('#affiliate_videos, #affiliate_tools').removeClass('btnnewclicked');
});
$('#stepbtn01a').live('click', function () {
    loaderCont02();
    $('#copyoxcont02').load('marketingcopy.html #marketingsteps01');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn02a').live('click', function () {
    loaderCont02();
    $('#copyoxcont02').load('marketingcopy.html #marketingsteps02');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn03a').live('click', function () {
    loaderCont02();
    $('#copyoxcont02').load('marketingcopy.html #marketingsteps03');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn04a').live('click', function () {
    loaderCont02();
    $('#copyoxcont02').load('marketingcopy.html #marketingsteps04');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn05a').live('click', function () {
    loaderCont02();
    $('#copyoxcont02').load('marketingcopy.html #marketingsteps05');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn06a').live('click', function () {
    loaderCont02();
    $('#copyoxcont02').load('marketingcopy.html #marketingsteps06');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn07a').live('click', function () {
    loaderCont02();
    $('#copyoxcont02').load('marketingcopy.html #marketingsteps07');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn08a').live('click', function () {
    loaderCont02();
    $('#copyoxcont02').load('marketingcopy.html #marketingsteps08');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn09a').live('click', function () {
    loaderCont02();
    $('#copyoxcont02').load('marketingcopy.html #marketingsteps09');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn10a').live('click', function () {
    loaderCont02();
    $('#copyoxcont02').load('marketingcopy.html #marketingsteps10');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn11a').live('click', function () {
    loaderCont02();
    $('#copyoxcont02').load('marketingcopy.html #marketingsteps11');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});
$('#stepbtn12a').live('click', function () {
    loaderCont02();
    $('#copyoxcont02').load('marketingcopy.html #marketingsteps12');
    $('#left_nav table tbody tr td').removeClass('btnnewclicked');
    return false;
});