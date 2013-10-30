
$(document).ready(function(){


    $('#boxcont1').hover(function(){
        $('#firstleft').css('opacity', '1');
        $('h1').html("<a href='www.google.com' style='color:#336699;'>BaseCamp</a> is the project management tool you wish you had on your last project.");
        $('h1').css({"font-size":"46px"});
        $('h2').html("Are you still managing projects with email? Are you still using Excel for your to-do lists? It’s time to upgrade to Basecamp. Manage projects and collaborate with your team and clients the modern way.");
        $('h2').css({"font-size":"15px", "font-family":"'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif", "margin-bottom":"10px", "font-weight":"normal"});
    }, function(){
        $('#firstleft').css('opacity', '0');
        $('h1').html("Making collaboration productive and enjoyable for people every day.")
        $('h1').css({"font-size":"58px"});
        $('h2').html("Frustration-free web-based apps for collaboration, sharing information, and making decisions.");
        $('h2').css({"font-size":"20px", "font-family": "'Crimson Text', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif", "margin-bottom":"0px", "font-weight":"bold"});
    });



/*Highrise Box*/
    $('#boxcont2').hover(function(){
        $('#secondleft').css('opacity', '1');
        $('h1').html("<a href='www.google.com' style='color:#336699;'>Highrise</a> remembers the important things about people you'd normally forget.");
        $('h1').css({"font-size":"46px"});
        $('h2').html("Keep a permanent record of people you do buisness with. Know who you talked to, when you talked to them, what was said, and when to follow up next. Over 20,000,000 contacts are managed through Highrise.");
        $('h2').css({"font-size":"15px", "font-family":"'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif", "margin-bottom":"10px", "font-weight":"normal"});
    }, function(){
        $('#secondleft').css('opacity', '0');
        $('h1').html("Making collaboration productive and enjoyable for people every day.")
        $('h1').css({"font-size":"58px"});
        $('h2').html("Frustration-free web-based apps for collaboration, sharing information, and making decisions.");
        $('h2').css({"font-size":"20px", "font-family": "'Crimson Text', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif", "margin-bottom":"0px", "font-weight":"bold"});
    });

/*Campfire Box*/
    $('#boxcont3').hover(function(){
        $('#theright').css('opacity', '1');
        $('h1').html("From near to far, <a href='www.google.com' style='color:#336699;'>Campfire</a> helps teams work together over the web in real-time");
        $('h1').css({"font-size":"46px"});
        $('h2').html("Share ideas, discussions, concepts, images, code samples, videos, mockups, and documents in a real-time private chat room. It's game changing. We couldn't run our own business without Campfire.");
        $('h2').css({"font-size":"15px", "font-family":"'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif", "margin-bottom":"10px", "font-weight":"normal"});
    }, function(){
        $('#theright').css('opacity', '0');
        $('h1').html("Making collaboration productive and enjoyable for people every day.")
        $('h1').css({"font-size":"58px"});
        $('h2').html("Frustration-free web-based apps for collaboration, sharing information, and making decisions.");
        $('h2').css({"font-size":"20px", "font-family": "'Crimson Text', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif", "margin-bottom":"0px", "font-weight":"bold"});
    });






});

