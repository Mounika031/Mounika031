(function () {
    console.log("inside custom script");
    window.addEventListener("message", function (event1) {
        try {
            let event = JSON.parse(event1.data);
            if ("custom-event" == event.event_code && "custom-event" === event.data.code) {
                console.log("value triggered for custom-event", event.event_code);
                let host = window.location.host || "";
                console.log(host, "host")
                window.location.replace("https://flipkart.onelogin.com/login2/?return=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmkiOiJodHRwczovL2ZsaXBrYXJ0Lm9uZWxvZ2luLmNvbS90cnVzdC9zYW1sMi9odHRwLXBvc3Qvc3NvLzM3MDcxNj9zYW1sX3JlcXVlc3RfcGFyYW1zX3Rva2VuPWRkZGY5ZTcwNWYuMTk0NmJjMDg4MTFmNjM4ZWY2ZmE4Zjk0MmZhNDcyZWYxNDVlM2I3Zi5LLWxtT1pncjIwa2lra2QtaE44SXdRWl9zcWxyUjFXbWVGa3RQVGg0Yl9NJTNEIiwiYXBwX2lkIjoiMzcwNzE2IiwiYXVkIjoiQUNDRVNTIiwiZmZfbXVsdGlwbGVfYnJhbmRzIjpmYWxzZSwiaXNzIjoiTU9OT1JBSUwiLCJicmFuZF9pZCI6Im1hc3RlciIsImV4cCI6MTY3MDU4MDU2MCwibm90aWZpY2F0aW9uIjp7Imljb24iOiJjb25uZWN0aW9uIiwibWVzc2FnZSI6IkNvbm5lY3RpbmcgdG8gQXBwbGljYXRpb24iLCJ2YWx1ZXMiOlsiQXBwbGljYXRpb24iXSwidGVtcGxhdGVfaWQiOiJjb25uZWN0aW5nX3RvX2FwcCIsInR5cGUiOiJpbmZvIn0sInBhcmFtcyI6e30sIm1ldGhvZCI6ImdldCJ9._zYCgZ1CTdUv_hPW1sz9RN8r26T8kLZ0ou6jQ6sX-A4#app=370716");
            }

        }
        catch (error) { console.log(error, "Error occured"); }
    }, false);
})();
