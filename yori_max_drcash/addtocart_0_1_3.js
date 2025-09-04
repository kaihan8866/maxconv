// 用法示例
//const phone = normalizePhone(params.get('phone'),{defaultCountry:getSelfParams().geo}).e164;
const eventName = "AddToCart";
loadScript('https://t.primefitinsight.com/conv.js?clid=' + sub1 + '&event=' + eventName, function () {
    console.log('maxconv addtocart');
});

_yuri_track(eventName);
fbq('track', eventName, {}, {eventID: sub2 + '-' + eventName});
fbq('track', eventName + '-' + sub3, {}, {eventID: sub2 + '-' + eventName});