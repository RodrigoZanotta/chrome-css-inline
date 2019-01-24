$(document).ready(function(){

    $.switcher('input[type=checkbox]');

    //$('.form-check-input').trigger('click');

    chrome.storage.sync.get(['status'], function(result) {

        if (result.status == 'on') {
            $('.ui-switcher').addClass('aria-checked').attr('aria-checked', true);
        }

    });

    $('.form-check-input').click(function(){

        chrome.storage.sync.set({status: $(this).is(":checked") ? 'on' : 'off' });

        chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
            chrome.tabs.reload(arrayOfTabs[0].id);
        });

    });

});