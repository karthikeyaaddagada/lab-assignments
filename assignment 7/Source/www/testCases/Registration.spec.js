describe('RegistrationController', function () {
  beforeEach(angular.mock.module('myApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('RegistrationData', function() {
    it('Tests the Full name feature of the application', function() {
      var $scope = {};
      var controller = $controller('RegistrationController', { $scope: $scope });
      var firstname = 'Karthik';
      var lastname = 'A';
      expect($scope.RegisrationData.Username.toEqual('Karthik'));   // succeeds
      expect($scope.RegisrationData.UsernametoEqual('Karthik'));    // fails   
    });
  });
});