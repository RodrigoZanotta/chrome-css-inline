$(document).ready(function(){

    chrome.storage.sync.get(['status'], function(result) {

        if (result.status == 'on') {
            $('.toggle').minitoggle({on: true});
        }
        else {
            $('.toggle').minitoggle();
        }

    });


    $('.toggle').on("toggle", function(e){

        chrome.storage.sync.set({status: e.isActive ? 'on' : 'off' });

        chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
            chrome.tabs.reload(arrayOfTabs[0].id);
        });

    });

});