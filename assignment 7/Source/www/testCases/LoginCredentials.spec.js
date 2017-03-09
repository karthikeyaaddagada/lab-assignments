describe('LoginController', function () {
  beforeEach(angular.mock.module('myApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('LoginData', function() {
    it('Tests the Full name feature of the application', function() {
      var $scope = {};
      var controller = $controller('LoginController', { $scope: $scope });
      expect($scope.LoginData.Username.toEqual('Karthik') && $scope.LoginData.Password.toEqual('Karthik'));   // succeeds
      expect($scope.LoginData.Username.toEqual('Admin') && $scope.LoginData.Username.toEqual('Admin') );    // fails
    });
  });
});