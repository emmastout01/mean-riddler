var myApp = angular.module('myApp', ['ngRoute']);


// Configuring routes for templates
myApp.config(function ($routeProvider) {
    $routeProvider.when('/add', {
        templateUrl: 'templates/add.html',
        controller: 'AddRiddleController as add'
    }).when('/view', {
        templateUrl: 'templates/view.html',
        controller: 'ViewRiddleController as view'
    })
})
