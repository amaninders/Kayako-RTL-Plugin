chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg === 'url-update') {
        $(document).ready(checkContainer);

        function checkContainer () {
        if($("div.ko-timeline-2_list_item__content_1oksrd").is(':visible')){ //if the container is visible on the page and ready for DOM manipulation
            fixRTL();  //append RTL style to Arabic posts
        } else {
            setTimeout(checkContainer, 500); //wait 50 ms, then try again
        }
        };

        function fixRTL () {
        let postArray = $("div.ko-timeline-2_list_item__content_1oksrd"); //fetch all the posts from a ticket

            for (let index = 0; index < postArray.length; index++) {
                var element = postArray[index];
                var letters = /[\u0600-\u06FF]+$/
                if ( element.innerText.substring(0, 10).match(letters)) {
                element.style["direction"] = "rtl";
                }
                else {
                element.style["direction"] = "ltr";
                }  
            }
        };
    }
});