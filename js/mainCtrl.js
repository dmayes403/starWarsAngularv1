angular.module('myApp')
    .controller('mainCtrl', function($scope, srvc){

      $scope.newData = srvc.getData();
})
