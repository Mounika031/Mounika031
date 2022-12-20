(function () {
    console.log("inside custom script");
    window.addEventListener("message", function (event1) {
        try {
            let event = JSON.parse(event1.data);
            if ("custom-event" == event.event_code && "custom-event" === event.data.code) {
                console.log("value triggered for custom-event", event.event_code);
                let host = window.location.host || "";
                console.log(host, "host")
                window.location.replace("https://staging.yellowmessenger.com/components/flipkart");
            }

        }
        catch (error) { console.log(error, "Error occured"); }
    }, false);
})();
