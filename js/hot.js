/**
 * Created by Administrator on 2016/10/23.
 */
(function () {
    var hotModule = angular.module('hotModule',['doubanApp.service']);
    hotModule.controller('hotCtrl',['$scope','$http','JsonpService','$routeParams','$route',function ($scope,$http,JsonpService,$routeParams,$route) {

        // $http.get('tsconfig.json').then(function (value) {
        //
        //     $scope.subjects = value.data.subjects;
        //
        // },function (error) {
        //
        // })

        $scope.subjects = [];

        var count = 10;

        console.log($routeParams.page);
        var currentPage = parseInt($routeParams.page || 1);
        $scope.currentPage = currentPage;
        //计算开始的位置
        var start = (currentPage-1)*count;



        JsonpService.jsonp('https://api.douban.com/v2/movie/in_theaters',{count:count,start:start},function (data) {
            $scope.subjects = data.subjects;

            //总的条数
            $scope.total = data.total;

            //总的页数
            $scope.totalPage = Math.ceil($scope.total/count);

            $scope.$apply();

        //    分页  改变的是路由
            $scope.hundlePage = function (page) {
                if (page < 1 || page > $scope.totalPage){
                    return;
                }
                $route.updateParams({page:page});
            }
        })
    }]);
})();