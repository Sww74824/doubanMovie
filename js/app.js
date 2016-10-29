/**
 * Created by Administrator on 2016/10/23.
 */

(function () {
    var douban = angular.module('doubanApp',['ngRoute','listModule']);
    douban.config(['$routeProvider',function ($routeProvider) {
        $routeProvider.
            when('/:category/:page?',{
                templateUrl:'list/list.html',
                controller:'listCtrl'
            }).
                otherwise({
                    restrictTo:'/in_theaters/1'
            })
    }])
})();