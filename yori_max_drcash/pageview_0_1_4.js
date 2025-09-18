// 用法示例
const eventName = "PageView";
// maxconv event
loadScript('https://t.primefitinsight.com/conv.js?clid=' + sub1 + '&event=' + eventName, function () {
    console.log("eventName: " + eventName);
    console.log("maxconv id: " + sub1);
});

// yuri event
_yuri_track(eventName);
console.log('yuri event:', eventName);

// FB event
fbq('track', eventName, {}, {eventID: sub2 + '-' + eventName});
console.log('FB event:', eventName);

// FB custom event
fbq('track', eventName + '-' + sub3, {}, {eventID: sub2 + sub3 + '-' + eventName});
console.log('FB event:', eventName + '-' + sub3);
