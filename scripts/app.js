angular.module("ngclassifieds",["ngMaterial"])
.config(function ($mdThemingProvider) {
	$mdThemingProvider.theme('defualt').
	primaryPalette('teal').
	accentPalette('orange');
}).directive('asgharAbbasnejaad',function () {
	return {
		template: "<h1>{{message}}</h1>"
	}
});