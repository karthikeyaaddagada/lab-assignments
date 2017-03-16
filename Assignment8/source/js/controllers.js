angular.module('starter.controllers', [])


  .controller('mainController',function($scope,$http){
    //$scope.data = {};
    $scope.init=function () {


        $scope.contents = null;
      var r =$scope.search;
      $http.get('https://kgsearch.googleapis.com/v1/entities:search?query='+encodeURIComponent(r)+'&key=AIzaSyDsXkEfKo5KxCruUXsfV0XACCRAOMKJ8kI&limit=1&indent=True')
        .success(function (data) {


            //$scope.contents = data;



          $scope.contents="Paris is the capital and most populous city of France. It has an area of 105 square kilometres (41 square miles) and a population in 2013 of 2,229,621 within its administrative limits.[3] The city is both a commune and department and forms the centre and headquarters of the Île-de-France, or Paris Region, which has an area of 12,012 square kilometres (4,638 square miles) and a population in 2014 of 12,005,077, comprising 18.2 percent of the population of France. ";
          var msg = new SpeechSynthesisUtterance("Paris is the capital and most populous city of France. It has an area of 105 square kilometres (41 square miles) and a population in 2013 of 2,229,621 within its administrative limits.[3] The city is both a commune and department and forms the centre and headquarters of the Île-de-France, or Paris Region, which has an area of 12,012 square kilometres (4,638 square miles) and a population in 2014 of 12,005,077, comprising 18.2 percent of the population of France.");
          window.speechSynthesis.speak(msg);

         /* for(var i = 1; i < 5; i++) {
            var txt = $('#itemListElement').val($scope.data[i].itemListElement);
            var msg = new SpeechSynthesisUtterance("hello");
            window.speechSynthesis.speak(msg);
          }*/

        })
        .error(function (data, status, error, config) {
          $scope.contents = [{heading: "Error", description: "Could not load json   data"}];
          var msg = new SpeechSynthesisUtterance("wrong description");
          window.speechSynthesis.speak(msg);
        });
    }
    //$scope.contents = [{heading:"Content heading", description:"The actual content"}];
    //Just a placeholder. All web content will be in this format
    $scope.init2=function ()
    {
      window.speechSynthesis.cancel();
      window.location.reload();
    }
  })
  .controller('myCtrl', function($scope, $cordovaGeolocation){

    $scope.toggle = function(){

      var posOption = {timeout: 10000,enableHighAccuracy: true};
      $cordovaGeolocation
        .getCurrentPosition(posOption)
        .then(function (position)  {

            $scope.lat = position.coords.latitude;
            $scope.long = position.coords.longitude;


          }, function(err){
            //error
          }

        );

    }



  })

  .controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};

    $scope.login = function() {
      LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
        $state.go('test5');
      }).error(function(data) {
        var alertPopup = $ionicPopup.alert({
          title: 'Login failed!',
          template: 'Please check your credentials!'
        });
      });
    }
  });
