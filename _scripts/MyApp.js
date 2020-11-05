var MyApp = angular.module("MyApp", [
    'ngRoute',
    'SuperCtrtl'
])     // הכרזה על האפליקציה

MyApp.config(RouteConnect)

function RouteConnect($routeProvider) {
    $routeProvider.when("/list", {
        templateUrl: "addon/list.html",
        controller: "ListCtrl"
    }).when("/detail", {
        templateUrl: "addon/detail.html",
        controller: "DetailtCtrl"
    }).otherwise({
        redirectTo: "/list"
    })


}