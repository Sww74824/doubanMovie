/**
 * Created by Administrator on 2016/10/24.
 */

(function () {
    var serviceModule = angular.module('doubanApp.service',[]);
    serviceModule.service('JsonpService',['$window',function ($window) {

        this.jsonp = function (url,params,fn) {
            var queryString = '?';

            //    1.拼接参数
            for (key in params){
                queryString += key + '=' + params[key] + '&';
            }
            //    2.生成函数名
            var funname = 'myJsonp' + new Date().getTime();
            queryString += 'callback' + '=' + funname;
            //    3.挂载函数
            $window[funname] = function (data) {
                fn(data);
            };
            //    4.添加script标签,加载数据
            var script = $window.document.createElement('script');
            script.src = url + queryString;
            $window.document.body.appendChild(script);
            console.log(script.src);
        };

    }])
})();
