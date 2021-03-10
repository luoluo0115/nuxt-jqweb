
export function formatDate(timestamp) {
    let date = new Date(timestamp);
    return date.getYear() + "-" + date.getMonth() + 1 + "-" + date.getDate() + "   " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  }
  
  
  export function deepCopy(object) {
    return JSON.parse(JSON.stringify(object))
  }
  
  export function timeAgo(time) {
    const between = Date.now() / 1000 - Number(time)
  
    if (between < 3600) {
      return pluralize(~~(between / 60), ' 分钟前')
    } else if (between < 86400) {
      return pluralize(~~(between / 3600), ' 小时前')
    } else {
      return pluralize(~~(between / 86400), ' 天前')
    }
  }
  
  export function getCookiesInServer(req) {
    let Cookies = {};
    req && req.headers.cookie && req.headers.cookie.split(';').forEach(function (Cookie) {
      let parts = Cookie.split('=');
      Cookies[parts[0].trim()] = (parts[1] || '').trim();
    });
    return Cookies;
  }
  
  export function setCookieInClient(name, value, minutes) {
    let exp = new Date();
    exp.setTime(exp.getTime() + minutes * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
  }
  
  
  export function getCookieInClient(name) {
    let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
      return unescape(arr[2]);
    else
      return null;
  }
  
  export function seo() {
    let bp = document.createElement('script');
    let curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
      bp.src = 'https://hm.baidu.com/hm.js?3e80cd95dc92153bd633c7376355e892';
    } else {
      bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    let s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
  }

  export function isLogin() {
    if (getCookieInClient('token')) {
      return true
    }
    return false
  }
  
  export function setToken(tokenValue) {
    setCookieInClient('token', tokenValue, 60*24*7)
  }
