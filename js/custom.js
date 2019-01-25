var elements = document.querySelectorAll('body *[style]');

chrome.storage.sync.get(['status'], function(result) {

    if( result.status == 'on' ){
        mark_items(elements);
    }
});


function mark_items( elements ){
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add("ewic-28");
    }
}