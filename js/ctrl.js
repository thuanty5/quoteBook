angular.module("app").controller("ctrl", function($scope, srv){

    $scope.connect = "Angular Connected";

    $scope.quotes = srv.quotes;

    $scope.removeQuote = function(index){
        srv.removeQuote(index);
    }

    $scope.addQuote = function(newQuote){
        if(newQuote){
            srv.addQuote(newQuote);
            $scope.newQuote = undefined;
        } 
    }
})