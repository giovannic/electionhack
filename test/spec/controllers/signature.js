'use strict';

describe('Controller: SignatureCtrl', function () {

  // load the controller's module
  beforeEach(module('electionhackApp'));

  var SignatureCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SignatureCtrl = $controller('SignatureCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
