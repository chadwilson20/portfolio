//This function is to copy the emails on each page to the clipboard and to style the link
//once it is clicked when the emails are clicked.
function CopyEmail(id) {
    var range = document.createRange();
    var selection = window.getSelection();
    SelectEmailCopying(id, range);
    RemoveAllRanges(selection);
    selection.addRange(range);
    document.execCommand('copy');
    RemoveAllRanges(selection);
}

//this function creates the range for the text of the email that is to be copied.
function SelectEmailCopying(id, range) {
    if(id === "green_email_one") {
        range.selectNodeContents(document.getElementById('green_email_one'));
    }
    else if(id === "green_email_two") {
        range.selectNodeContents(document.getElementById('green_email_two'));
    }
    else if(id === "grey_email_one") {
        range.selectNodeContents(document.getElementById('grey_email_one'));
    }
    else if(id === "grey_email_two") {
        range.selectNodeContents(document.getElementById('grey_email_two'));
    }
    else if (id === "grey_email_three") {
        range.selectNodeContents(document.getElementById('grey_email_three'));
    }
    else if(id === "drop_down_menu_email") {
        range.selectNodeContents(document.getElementById('drop_down_menu_email'));
    }
    else if(id === "wider_screen_drop_down_menu_email") {
        range.selectNodeContents(document.getElementById('wider_screen_drop_down_menu_email'));
    }
}

//This function removes all ranges once copying is done.
function RemoveAllRanges(selection) {
    selection.removeAllRanges();
}

//This function closes the projects info if the window is resized.
$(window).resize(function() {
    if($(".component-specific_projects_info_div_hidden").is(':visible')) {
        $(".component-specific_projects_info_div_hidden").slideUp(400);
    }
    else if($("#prayer_app_drop_down_menu_tablet_view").is(':visible')) {
        $("#prayer_app_drop_down_menu_tablet_view").slideUp(400);
    }
});

$(document).ready(function() {
    /* This function changes styling of links when they are clicked */
    $("a").click(function() {
        if($(this).hasClass("component-footer_background_color__a")) {
            $(this).css({
                "border-bottom-color":"#E6E6E6"
            });
        }
        else {
            $(this).css({
                "color":"#86C543",
                "border-bottom-color":"#86C543"
            });
            if($(this).parent().hasClass("wider_screen_size_header_navigation_nav") || $(this).parent().hasClass("component-header__left-div__nav")) {
                $(this).css({
                    "border-bottom-color":"white"
                });
            }
            else {
                $(this).css({
                    "border-bottom-color":"#86C543"
                });
            }
        }
    });

    //Gives animation to some of the links on hover
    $(".from_black_to_green_border").hover(function() {
        $(this).addClass("from_black_to_green_border_animation");
    }, function() {
        $(this).removeClass("from_black_to_green_border_animation");
    });

    //Gives animation to the last email link before hitting the footer on hover
    $("#green_email_one").hover(function() {
        $("#green_email_one").addClass("green_email_one_border_animation");
    }, function() {
        $("#green_email_one").removeClass("green_email_one_border_animation");
    });

    //This function is to display the drop-down menu when the menu button is clicked on mobile view
    $(".open_menu").click(function() {
        $(".menu").css({
            "pointer-events":"auto",
            "display":"flex"
        });
        if($(".menu").hasClass("component-drop_down_menu_hide_animation"))
        {
            $(".menu").removeClass("component-drop_down_menu_hide_animation");
        }
        $(".menu").addClass("component-drop_down_menu_show_animation");
        $(".component-main_content").css({"pointer-events":"none"});
        if($(".component-main_content").hasClass("component-drop_down_menu_close_animation"))
        {
            $(".component-main_content").removeClass("component-drop_down_menu_close_animation");
        }
        $(".component-main_content").addClass("component-drop_down_menu_open_animation");
    });

    //This function is to close the drop-down menu when the exit button is clicked on mobile view
    $(".close_menu").click(function() {
        $(".menu").css({
            "pointer-events":"none",
            "display":"none"
        });
        if($(".menu").hasClass("component-drop_down_menu_show_animation"))
        {
            $(".menu").removeClass("component-drop_down_menu_show_animation");
        }
        $(".menu").addClass("component-drop_down_menu_hide_animation");
        if($(".component-main_content").hasClass("component-drop_down_menu_open_animation"))
        {
            $(".component-main_content").removeClass("component-drop_down_menu_open_animation");
        }
        $(".component-main_content").addClass("component-drop_down_menu_close_animation");
        $(".component-main_content").css({"pointer-events":"auto"});
    });

    //Opens up either the mobile view project info or the tablet view project info based on the screen size
    $(".open_project_info").click(function() {
        if(screen.width > 0 && screen.width <= 771)
        {
            $(".component-specific_projects_info_div_hidden").slideToggle(400); 
        }
        else 
        {
            $("#prayer_app_drop_down_menu_tablet_view").slideToggle(400);
        }
    });
});