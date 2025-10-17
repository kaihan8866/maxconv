//////////////////////////////////////////////////////////////////////

// 获取当前js文件的加载参数

function getSelfURL() {
  // 1) 尝试在 module 中读取 import.meta.url
  try {
    // 只在 module 脚本里可执行；在非 module 里会抛错，被 catch 吞掉
    const metaUrl = (new Function('return import.meta.url'))();
    if (metaUrl) return new URL(metaUrl);
  } catch (_) {}

  // 2) 传统脚本：用 currentScript；若不可用，回退最后一个 <script>
  const el = document.currentScript || document.scripts[document.scripts.length - 1];
  return new URL(el.src || '', document.baseURI);
}

function getSelfParams({ multiValue = true } = {}) {
  const sp = getSelfURL().searchParams;
  if (!multiValue) return Object.fromEntries(sp.entries()); // 简单键值

  // 支持同名多值 ?flag=a&flag=b -> { flag: ['a','b'] }
  const out = {};
  sp.forEach((v, k) => {
    if (k in out) out[k] = Array.isArray(out[k]) ? out[k].concat(v) : [out[k], v];
    else out[k] = v;
  });
  return out;
}


/////////////////////////////////////////////////////////////////////////////////
// start 
// 获取URL参数
const params = new URLSearchParams(window.location.search);
const sub1 = params.get('sub1'); // maxconv id
const sub2 = params.get('sub2'); // 尤里改clickid
const sub3 = params.get('sub3'); // offer name
function loadScript(url, callback) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // 加载完成回调
    script.onload = function () {
        if (callback) callback();
    };

    document.head.appendChild(script);
}


///////////////////////////////////////////////////////////////////

!function(y,u,r,i){y._yuri_track||((n=y._yuri_track=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)}).queue=n.queue||[],y._yuri_track._fp||(y._yuri_track._fp=1,t=u.createElement(r),s=u.getElementsByTagName(r)[0],t.async=1,t.src=i,s.parentNode.insertBefore(t,s)))}(window,document,"script","https://cdn.jsdelivr.net/gh/adzon/assets/pixel.js?_rid=" + sub2);
console.log("尤里改像素加载完成, 尤里改clickid: " + sub2);


const pixelID = getSelfParams().pixel; // 像素id

!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', pixelID, {'external_id': sub2});
console.log('pixelID', pixelID);



const eventName = "PageView";
// maxconv event
loadScript('https://t.primefitinsight.com/conv.js?clid=' + sub1 + '&event=' + eventName, function () {
    console.log("maxconv eventName: " + eventName);
});

// yuri event
_yuri_track(eventName);
console.log('yuri event:', eventName);

// FB event
fbq('track', eventName, {}, {eventID: sub2 + '-' + eventName});
console.log('FB event:', eventName);


(function() {
  let scroll50Fired = false;
  let scroll100Fired = false;

  function sendScrollEvent(percent) {
    const eventName = 'PreLPScroll' + percent;
    loadScript('https://t.primefitinsight.com/conv.js?clid=' + sub1 + '&event=' + eventName, function () {
        console.log("maxconv eventName: " + eventName);
    });
  }

  window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    if (scrollPercent > 30 && !scroll50Fired) {
      scroll50Fired = true;
      sendScrollEvent(30);
    }

    if (scrollPercent > 95 && !scroll100Fired) {
      scroll100Fired = true;
      sendScrollEvent(100);
    }
  });

  setTimeout(function() {
        const eventName = 'PreLP30';
        loadScript('https://t.primefitinsight.com/conv.js?clid=' + sub1 + '&event=' + eventName, function () {
            console.log("maxconv eventName: " + eventName);
        });
    }, 30000); // 30秒
})();
