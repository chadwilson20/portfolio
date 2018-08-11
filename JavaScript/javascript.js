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
    else if(id === "grey_email") {
        range.selectNodeContents(document.getElementById('grey_email'));
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

$(document).ready(function() {
    /* Lines 36-60 resets links on browser refresh */
    var links = document.links;
    for(var i = 0; i < links.length; i++)
    {
        var link = links[i];
        $(link).css({
            "text-decoration":"none"
        });
        if($(link).hasClass("component-footer_background_color__a")) {
            $(link).css({
                "color":"#E6E6E6",
                "border-bottom":"1px solid #34302D"
            });
        }
        else {
            $(link).css({
                "color":"#34302D",
                "border-bottom":"1px solid white"
            });
        }
    }
    /* This link does not have component-footer_background_color__a class
    so I had to write code for it separately */
    $("#green_email_two").css({
        "border-bottom-color":"#34302D"
    });
    
    $("#wider_screen_drop_down_menu_email").css({
        "color":"#E6E6E6"
    });
    
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
        }
    });
    
    $("#wider_screen_drop_down_menu_email").click(function() {
        $("#wider_screen_drop_down_menu_email").css({
            "border-bottom-color":"white"
        });
    });
    
    
    /* This function changes styling of drop down menu email when clicked */
    $("#drop_down_menu_email").click(function() {
        $("#drop_down_menu_email").css({
            "border-bottom-color":"white"
        });
    });
    
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