// 用法示例
const eventName = "PageView";
loadScript('https://t.primefitinsight.com/conv.js?clid=' + sub1 + '&event=' + eventName, function () {
    console.log('maxconv pageview');
});

_yuri_track(eventName);
fbq('track', eventName, {}, {eventID: sub2 + '-' + eventName});

