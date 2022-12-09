(function () {
    console.log("inside custom script");
    window.addEventListener("message", function (event1) {
        try {
            let event = JSON.parse(event1.data);
            if ("custom-event" == event.event_code && "custom-event" === event.data.code) {
                console.log("value triggered for custom-event", event.event_code);

            }
            // if ("ym-bot-opened" == event.event_code) {
            //     window.ymInterval = setInterval(() => {
            //         try {
            //             console.log("value triggered for event", event.event_code);
            //             const frameDocument = window.frames && window.frames.ymIframe && window.frames.ymIframe.document; const title = frameDocument.getElementsByClassName("title");
            //             if (title) {
            //                 title[0].remove();
            //             }
            //             const subTitle = frameDocument.getElementsByClassName("sub-title");
            //             if (subTitle) {
            //                 subTitle[0].remove();
            //             }
            //             var x = frameDocument.getElementsByClassName("title-parent");
            //             console.log(" title execution parent", x);
            //             var element = frameDocument.createElement("img");
            //             element.setAttribute("class", "icon1");
            //             element.style.maxWidth = "200px";
            //             element.style.margin = "-10px 0 0 -25px";
            //             element.style.padding = 0;
            //             element.setAttribute("src", "https://cdn.yellowmessenger.com/nqpngvPBB6qG1628763442725.png");
            //             if (x) {
            //                 x[0].appendChild(element);
            //             }
            //             clearInterval(window.ymInterval);
            //         } catch (error) {
            //             clearInterval(window.ymInterval);
            //         }
            //     }, 100);
            // }
        }
        catch (error) { console.log(error, "Error occured"); }
    }, false);
})();