var TWP = window.TWP || {}; TWP.Status = TWP.Status || {}; TWP.Status.Identity = TWP.Status.Identity || {}; (function() { TWP.Status.Identity.status = "init"; var env = "production"; var fileList = []; fileList.push('https://www.washingtonpost.com/wp-stat/analytics/latest/main.js?token=20210420445EST'); if (typeof CustomEvent != 'function') { fileList.unshift("//www.washingtonpost.com/pb/gr/c/javascript/r0TEMqBRrcpdrp/polyfill/2e4f13c67f.js?_=b55d8"); } if (!window.wp_pb || !window.wp_pb.BrowserInfo) { fileList.unshift("//www.washingtonpost.com/pb/gr/c/javascript/r0TEMqBRrcpdrp/mobile-detection/be28be8d4b.js?_=8c659"); } var gdpr_cookie = document.cookie.match(/wp_gdpr=([1^]+)/) ? RegExp.$1 : null; if (gdpr_cookie && gdpr_cookie === '1' ) { fileList.unshift("//www.washingtonpost.com/pb/gr/c/javascript/r0TEMqBRrcpdrp/eu-cookie-banner/87811ab41e.js?_=4cf12" ); } fileList.unshift("https://www.washingtonpost.com/wp-stat/pwapi/prod/pwapi-proxy.min.js"); fileList.push("//www.washingtonpost.com/pb/gr/c/javascript/r0TEMqBRrcpdrp/modal-css/4f0612af05.css?_=eb39d");fileList.push("//www.washingtonpost.com/pb/gr/c/javascript/r0TEMqBRrcpdrp/conf-production/b5411285f6.js?_=26a42"); var isLogged = document.cookie.match(/wpnisecure=([^;]+)/) ? true : false; var wapo_sub = document.cookie.match(/wapo_actmgmt=(\b|.*\|)(isub:(\d))(\b|\|)([^;]*);/); var isSubscriber = (wapo_sub != null && wapo_sub[3] === '1') ? true : false; if (!isSubscriber) { } fileList.push("//www.washingtonpost.com/pb/gr/c/javascript/r0TEMqBRrcpdrp/identity-management-core-proxy/6b62210598.js?_=11b82"); if (typeof window.jQuery === 'undefined' || typeof window.jQuery.cookie === 'undefined') { fileList.unshift("//www.washingtonpost.com/pb/gr/c/javascript/r0TEMqBRrcpdrp/jquery-cookie/4cc3c1bef0.js?_=b8874" ); } if (typeof window.jQuery === 'undefined' || typeof window.jQuery.jqm === 'undefined') { fileList.unshift("//www.washingtonpost.com/pb/gr/c/javascript/r0TEMqBRrcpdrp/jqmodal/7a5b554023.js?_=26a28" ); } if (typeof window.jQuery === 'undefined') { fileList.unshift("//www.washingtonpost.com/pb/gr/c/javascript/r0TEMqBRrcpdrp/jquery/f0afa3f975.js?_=b51a4" ); } window.head_conf = {head: "TWPHead"}; console.time("ResourceBundle pb-r-identity"); if (typeof window.TWPHead == 'undefined') { var jsHeadJs = "//www.washingtonpost.com/pb/resources/js/head.min.js"; var jsscript = document.createElement('script'); jsscript.onload = jsscript.onreadystatechange = function(){ if ( this.readyState && this.readyState != "complete" && this.readyState != "loaded" ) { return; } TWPHead.load(fileList,function(){ console.timeEnd("ResourceBundle pb-r-identity"); }); }; jsscript.src = jsHeadJs; var jssib = document.getElementsByTagName('script')[0]; jssib.parentNode.insertBefore(jsscript, jssib); } else { TWPHead && TWPHead.load(fileList,function(){ console.timeEnd("ResourceBundle pb-r-identity"); }); } })(jQuery);