var Http = (function() {
	var http = {};
	if (typeof window.XMLHttpRequest === "undefined") {
		/**
		 * @ignore
		 */
		window.XMLHttpRequest = function() {
			// 如果是i5就用Microsoft，其他就用Msxml2
			return new window.ActiveXObject(navigator.userAgent
					.indexOf("MSIE 5") >= 0 ? "Microsoft.XMLHTTP"
					: "Msxml2.XMLHTTP");
		};
	}
	http.getHash = function(n) {
		var m = window.location.hash.match(new RegExp('(?:#|&)' + n
				+ '=([^&]*)(&|$)')), result = !m ? ''
				: decodeURIComponent(m[1]);
		return result || http.getParameterByName(n);
	};
	http.getParameterByName = function(n, url) {
		var m, result, search;
		if (url) {
			m = url.match(/\?[^#]+/);
			search = !m ? '' : m[0];
		} else {
			search = window.location.search;
		}
		m = search.match(new RegExp('(?:\\?|&)' + n + '=([^&]*)(&|$)'));
		result = !m ? '' : decodeURIComponent(m[1]);
		return result;
	};
	http.post = function(url, data, callback, error) {
		if (typeof data === "function") {
			callback = data;
			data = null;
		}
		var timeout = setTimeout(function() {
			error();
		}, 10000);
		var xhr = new XMLHttpRequest();
		xhr.open('post', url);
		xhr.withCredentials = true;
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				clearTimeout(timeout);
				if ((!xhr.status && location.protocol === "file:")
						|| (xhr.status >= 200 && xhr.status < 300)
						|| (xhr.status === 304)
						|| (navigator.userAgent.indexOf("Safari") > -1 && typeof xhr.status === "undefined")) {
					//alert(xhr.responseText);
					callback(JSON.parse(xhr.responseText));
				} else {
					error();
				}
				// 删除对象,防止内存溢出
				xhr = null;
			}
		};
		xhr.onerror = function() {
			clearTimeout(timeout);
			error();
		};
		//xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
		xhr.setRequestHeader('content-Type',
				'application/x-www-form-urlencoded');
		xhr.withCredentials=true;
		xhr.send(http.urlCode(data));
	};
	http.urlCode = function(data) {
		var str = '';
		if (!data) {
			return null;
		}
		for ( var key in data) {
			str += key + '=' + encodeURIComponent(data[key]) + '&';
		}
		return str.substring(0, str.length - 1);
	}
	return http;
})();
export default Http