'use strict';

var app = angular.module('airlineRttApp', ['ngRoute', 'ui.bootstrap', 'ngDragDrop'])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/alertView', {
			  templateUrl: 'views/alertview.html',
			  controller: 'AlertviewCtrl'
			})
			.when('/addNewAgent', {
			  templateUrl: 'views/addnewagent.html',
			  controller: 'AddnewagentCtrl'
			})
			.otherwise({
				redirectTo: '/alertView'
			})
});
