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

// end getSelfURL

// start normalizePhone

// ====== 用法示例 ======
/*
normalizePhone("+39 1232 1232")      // => { e164: "+3912321232", e164Digits: "3912321232", ok: true, ... }
normalizePhone("3912323212")         // (默认 IT) => "+393912323212"
normalizePhone("+3912323212")        // => "+3912323212"
normalizePhone("0039-340-123-4567")  // => "+393401234567"
normalizePhone("081-234-5678", { defaultCountry: "IT" }) // => "+39812345678"（去掉一个前导0）
*/
// 常用国家码（可按需扩充）
const COUNTRY_CODE = {
  IT: "39", US: "1", GB: "44", AU: "61", NZ: "64",
  CA: "1", SG: "65", DE: "49", FR: "33", ES: "34",
  RS: "381", CN: "86"
};

/**
 * 标准化手机号为 E.164
 * 规则：
 *  - 若以 "+" 开头：直接清洗成 "+<digits>"
 *  - 若无 "+"：
 *      a) 若以默认国家码开头：视为已含国家码 → 直接加上 "+"
 *      b) 否则：当作本地号，用默认国家码拼接
 * 可选：
 *  - dropTrunkZero: 拼接国家码时去掉一个前导 0（EU 常见做法，US/CA 通常不去）
 *  - assumeLeadingCC: 无 "+" 但以默认国家码开头时，是否视为已含国家码（默认 true）
 */
function normalizePhone(raw, {
  defaultCountry = "IT",
  minLen = 8,
  maxLen = 15,
  dropTrunkZero = true,
  assumeLeadingCC = true
} = {}) {
  if (raw == null) return { ok: false, reason: "empty" };

  // 1) 基础清洗：00 -> +；保留首位 +；移除其它非数字
  let s = String(raw).trim();
  if (s.startsWith("00")) s = "+" + s.slice(2);
  const hadPlus = s.startsWith("+");
  s = s.replace(/[^\d+]/g, "");
  if (hadPlus) s = "+" + s.slice(1).replace(/[+]/g, "");
  else s = s.replace(/[+]/g, "");

  const digits = s.replace(/[^\d]/g, "");
  const ccDefault = COUNTRY_CODE[defaultCountry];
  if (!ccDefault) return { ok: false, reason: "unknown_default_country" };

  let e164;

  if (hadPlus) {
    // 已有 + ，直接使用
    e164 = "+" + digits;
  } else {
    // 无 + 的情况
    if (assumeLeadingCC && digits.startsWith(ccDefault)) {
      // 视为已包含国家码（你的期望逻辑）
      e164 = "+" + digits;
    } else {
      // 视为本地号，拼接默认国家码
      let national = digits;
      // EU 等地区常用：去掉一个本地长途前导 0
      if (dropTrunkZero && !["US", "CA"].includes(defaultCountry)) {
        if (national.startsWith("0")) national = national.slice(1);
      }
      e164 = "+" + ccDefault + national;
    }
  }

  const e164Digits = e164.slice(1); // 去掉 “+”
  // 长度粗校验（国家码+本地号常见范围 8~15）
  if (e164Digits.length < minLen || e164Digits.length > maxLen) {
    return { ok: false, reason: "length_out_of_range", e164, e164Digits, input: raw };
  }

  return { ok: true, e164, e164Digits, input: raw };
}

// end normalizePhone


/////////////////////////////////////////////////////////////////////////////////
// start 
// 获取URL参数
const params = new URLSearchParams(window.location.search);
const sub1 = params.get('sub1');
const sub2 = params.get('sub2');
const sub3 = params.get('sub3');
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
console.log("maxconv id: " + sub1);

const pixelID = getSelfParams().pixel;

!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
console.log('pixelID', pixelID);
fbq('init', pixelID, {'external_id': sub2});




