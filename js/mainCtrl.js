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

      $scope.pushSubscriber = function(firstName, lastName){
        $scope.newUser = {
          'firstName': firstName,
          'lastName': lastName
        }
        srvc.subscribers.push($scope.newUser);
        console.log(srvc.subscribers);
      }
})
