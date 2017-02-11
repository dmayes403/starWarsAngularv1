angular.module('myApp')
    .controller('mainCtrl', function($scope, srvc){

      $scope.newData = srvc.getData();

      $scope.checkEyes = function(eyes){
        // $scope.eyes = eyes.toLowerCase();
        $scope.eyes = eyes;
        console.log($scope.eyes);
        // $scope.twin = true;
        return $scope.eyes;
      }
})
