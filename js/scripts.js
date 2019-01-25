$(document).ready(function(){

    chrome.storage.sync.get(['status'], function(result) {

        if (result.status == 'on') {
            $('.toggle').addClass('dont-refresh');
            $('.toggle').minitoggle({on: true});
        }
        else {
            $('.toggle').minitoggle();
        }

    });


    $('.toggle').on("toggle", function(e){

        chrome.storage.sync.set({status: e.isActive ? 'on' : 'off' });

        if( $('.toggle').hasClass('dont-refresh') ){
            $('.toggle').removeClass('dont-refresh');
        }
        else {
            chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
                chrome.tabs.reload(arrayOfTabs[0].id);
            });
        }

    });

});