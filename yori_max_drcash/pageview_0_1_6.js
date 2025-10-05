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

// FB LP event
fbq('track', eventName + '-' + sub3, {}, {eventID: sub2 + sub3 + '-' + eventName});
console.log('FB event:', eventName + '-' + sub3);


const mc_ad_id = params.get('mc_ad_id');; // mc_ad_id
console.log("Ad Id:", mc_ad_id);

const adName = AdConfig && AdConfig[mc_ad_id];
console.log("Ad Name:", adName);

// FB LP Ad Name
fbq('track', eventName + '-' + sub3 + '-' + adName, {}, {eventID: sub2 + sub3 + adName + '-' + eventName});
console.log('FB ADName event:', eventName + '-' + sub3 + '-' + adName);

const replaceContent = AdContent && AdContent[adName];
console.log("Ad Name", replaceContent);

if (replaceContent) {
    $(replaceContent).each(function(k, v) {
        $(k).html(v);
    });
}
