$(function()
{
    $('.box ul li').on('click', function()  {
        $('.box ul li.active').removeClass('active');
        $(this).addClass('active');

        //determines what tab to open
        var tabToOpen = $(this).attr('rel');
        
        //hiding current tab
        $('.box .tabs_box.active').slideUp(300, nextTab);
       
        function nextTab() {
            $(this).removeClass('active')

            //open new tab
            $('#'+tabToOpen).slideDown(300, function() {
                $(this).addClass('active');
            });

        }
    });

});



