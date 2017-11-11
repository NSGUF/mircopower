var Http = (function () {
    var http = {};
    if (typeof window.XMLHttpRequest === "undefined") {
        /**
         * @ignore
         */
        window.XMLHttpRequest = function () {
            // 如果是i5就用Microsoft，其他就用Msxml2
            return new window.ActiveXObject(navigator.userAgent
                .indexOf("MSIE 5") >= 0 ? "Microsoft.XMLHTTP"
                : "Msxml2.XMLHTTP");
        };
    }
    http.URL='http://localhost:8080'
    http.post = function (url, data, callback, error) {
        if (typeof data === "function") {
            callback = data;
            data = null;
        }

        var timeout = setTimeout(function () {
            error();
        }, 10000);
        var xhr = new XMLHttpRequest();
        xhr.open('post', url);
        xhr.withCredentials = true;
        xhr.onreadystatechange = function () {
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
        xhr.onerror = function () {
            clearTimeout(timeout);
            error();
        };
        //xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        //xhr.setRequestHeader('content-Type',
        //		'application/x-www-form-urlencoded');
        xhr.withCredentials = true;
        xhr.send(http.formDataCode(data));
    };
    http.formDataCode = function (data) {
        var fd = new FormData();
        if (!data) {
            return null;
        }
        for (var key in data) {
            if (data.files) {
                var file = data.files[0];
                fd.append("errPic", file);
            } else {
                fd.append(key, data[key]);
                console.log(key+"");
            }
        }
        return fd;
    }
    return http;
})();


export default Http