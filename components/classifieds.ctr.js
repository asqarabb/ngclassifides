(function(){
	"use strict";
	angular.module("ngclassifieds").controller("mycontroller",function ($scope) 
	{
		// $scope.message='hello lovely boy';
		// $scope.name={
		// 	first:"asghar",
		// 	last:"abbasnejad",
			
		// // $scope.name="asghar";
		// };
		$scope.classifieds=[
			{
				title:"first item",
				price:"$222ss",
				description:"The laravel.com page isn’t working .laravel.com didn’t send any data.",
				image:"/home/asqar/Downloads/TelegramDesktop/kk.png"
			},
				{
				title:"twice item",
				price:"$1000000",
				description:"The laravel",
				image:"/home/asqar/Downloads/TelegramDesktop/jj.png"
			},	{
				title:"3th item",
				price:"$1000000",
				description:"The angular",
				image:"/home/asqar/Downloads/TelegramDesktop/1024.png"
			},	{
				title:"4th item",
				price:"$1000000",
				description:"The laravel.com page isn’t working",
				image:"/home/asqar/Downloads/TelegramDesktop/512.png"
			},	{
				title:"5th item",
				price:"$1000000",
				description:"The bamaro",
				image:"/home/asqar/Downloads/TelegramDesktop/bamaro.png"
			},
		]
	});
})();