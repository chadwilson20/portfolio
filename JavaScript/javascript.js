//This function is to copy the emails on each page to the clipboard and to style the link
//once it is clicked when the emails are clicked.
function DropDownMenu(id) {
    if(id == "green_email_one") {
        $("#green_email_one").addClass("component-footer_background_color__green_emails_when_clicked");
    }
    else if(id == "green_email_two") {
        $("#green_email_two").addClass("component-footer_background_color__green_emails_when_clicked");
    }
    else if(id == "grey_email") {
        $("#grey_email").addClass("component-footer_background_color__grey_email_when_clicked");
    }
    else if(id == "drop_down_menu_email") {
        $("#drop_down_menu_email").addClass("component-drop_down_menu__email_when_clicked");
    }
    var range = document.createRange();
    var selection = window.getSelection();
    if(id == "green_email_one") {
        range.selectNodeContents(document.getElementById('green_email_one'));
    }
    else if(id == "green_email_two") {
        range.selectNodeContents(document.getElementById('green_email_two'));
    }
    else if(id == "grey_email") {
        range.selectNodeContents(document.getElementById('grey_email'));
    }
    else if(id == "drop_down_menu_email") {
        range.selectNodeContents(document.getElementById('drop_down_menu_email'));
    }
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();
}

$(document).ready(function() {
    //This function is to display the drop-down menu when the menu button is clicked
    $("#open_menu").click(function() {
        $("#menu").css({
            "pointer-events":"auto",
            "display":"flex"
        });
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
    //This function is to close the drop-down menu when the exit button is clicked
    $("#close_menu").click(function() {
        $("#menu").css({
            "pointer-events":"none",
            "display":"none"
        });
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
});