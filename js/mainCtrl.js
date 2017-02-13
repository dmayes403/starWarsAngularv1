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


      $scope.subscriberObj = function(firstName, lastName, age, gender, state, zip){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.state = state;
        this.zip = zip;
      }

      $scope.pushSubscriber = function(firstName, lastName, gender){
        $scope.David = new $scope.subscriberObj(firstName, lastName, gender);
        $scope.David = JSON.stringify($scope.David);
        srvc.subscribers.push($scope.David);
        localStorage.setItem(1, $scope.David);
        console.log(srvc.subscribers);
      }

      $scope.pushUnSubscriber = function(firstName, lastName, gender){
        for(var i = 1; i <= localStorage.length; i++){
          if(JSON.parse(localStorage.getItem(i)).firstName === firstName){
            localStorage.removeItem(i);
            }
          }
      }
})
