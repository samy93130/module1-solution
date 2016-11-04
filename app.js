(function(){    
"use strict"
angular.module("LunchCheck",[])
.controller("LunchCheckController",LunchCheckController);
LunchCheckController.$inject=["$scope"];
function LunchCheckController($scope){
	$scope.data="";
	$scope.answer="";
	$scope.myStyle="";
	$scope.isTooMuch=function(){
		if ($scope.data==""){
			$scope.myStyle={"color":"red"};
			$scope.answer="Please enter data first";
		}
		else{
		$scope.myStyle=
		{"color":"green"};
		var lengthFood=$scope.data.split(",").length;
		if (lengthFood<=3){
			$scope.answer="Enjoy!";
		}
		else{
			$scope.answer="Too much!";
		}
		}
	}
}
})();