$(document).ready(function() {
    $("#open_menu").click(function() {
        $("#menu").css({"display":"flex"});
        if($("#menu").hasClass("component-drop_down_menu_hide_animation"))
            {
                $("#menu").removeClass("component-drop_down_menu_hide_animation");
            }
        $("#menu").addClass("component-drop_down_menu_show_animation");
        $("#component-main_content").css({"pointer-events":"none"});
        if($("#component-main_content").hasClass("component-drop_down_menu_close_animation"))
            {
                $("#component-main_content").removeClass("component-drop_down_menu_close_animation");
            }
        $("#component-main_content").addClass("component-drop_down_menu_open_animation");
    });
    $("#close_menu").click(function() {
        $("#menu").css({"display":"none"});
        if($("#menu").hasClass("component-drop_down_menu_show_animation"))
            {
                $("#menu").removeClass("component-drop_down_menu_show_animation");
            }
        $("#menu").addClass("component-drop_down_menu_hide_animation");
        if($("#component-main_content").hasClass("component-drop_down_menu_open_animation"))
            {
                $("component-main_content").removeClass("component-drop_down_menu_open_animation");
            }
        $("#component-main_content").addClass("component-drop_down_menu_close_animation");
        $("#component-main_content").css({"pointer-events":"auto"});
    });
    $("#green_email_one").click(function() {
        $("#green_email_one").addClass("component-footer_background_color__green_emails_when_clicked");
        var range = document.createRange();
        var selection = window.getSelection();
        range.selectNodeContents(document.getElementById('green_email_one'));
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
    });
    $("#green_email_two").click(function() {
        $("#green_email_two").addClass("component-footer_background_color__green_emails_when_clicked");
        var range = document.createRange();
        var selection = window.getSelection();
        range.selectNodeContents(document.getElementById('green_email_two'));
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
    })
    $("#grey_email").click(function() {
        $("#grey_email").addClass("component-footer_background_color__grey_email_when_clicked")
        var range = document.createRange();
        var selection = window.getSelection();
        range.selectNodeContents(document.getElementById('grey_email'));
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
    })
});