'use strict';

/**
 * @ngdoc function
 * @name electionhackApp.controller:ProfileFormCtrl
 * @description
 * # ProfileFormCtrl
 * Controller of the electionhackApp
 */
angular.module('electionhackApp')
  .controller('ProfileFormCtrl', function ($scope, user, $http) {
    var step = 0;

    $scope.profile = {};
    $scope.email = user.password.email;
    $scope.validation = {
        errors: false
    };
    $scope.submitStatus = {
        submitting: false,
        submitted: false,
        error: false
    };
    $scope.notDone = true;

    // Sorry for the hack
    // Each stage represents a step in the wizard
    $scope.stages = [
        {
            name: 'Basic info',
            open: true,
            complete: false,
            fields: ['firstName', 'otherNames', 'lastName', 'dobDay', 'dobMonth', 'dobYear']
        },
        {
            name: 'Constituency info',
            open: false,
            complete: false,
            fields: ['constituency']
        },
        {
            name: 'Contact info',
            open: false,
            complete: false,
            fields: ['addrFirst', 'addrSecond', 'addrCity', 'addrPc']
        },
        {
            name: 'Submit',
            open: false,
            complete: true
        }
    ];

    // Validates every step in a stage using the per-field validation below
    var validateStep = function (step, profile) {
        var fields = $scope.stages[step].fields;
        for (var i = 0; i < fields.length; i++) {
            if (!validateField(fields[i], profile[fields[i]])) {
                return false;
            }
        }
        return true;
    };

    // Takes a fieldname and the value of that field currently in the form
    // and validates that particular field
    var validateField = function (fieldName, formField) {
        if (fieldName === undefined || formField === undefined) {
            return false;
        }

        // TODO: per-field validation

        return true;
    };

    // Validates the fields that belong to the current step and
    // then marks as complete before opening the next step
    $scope.advance = function (profile) {
        if (validateStep(step, profile)) {
            $scope.validation.errors = false;
            $scope.stages[step].open = false;
            $scope.stages[step].complete = true;
            step += 1;
            if (step > 2)
            {
                $scope.notDone = false;
            }
            $scope.stages[step].open = true;
        } else {
            // show errors
            $scope.validation.errors = true;

            // DEBUG
            console.log('You did not fill in the form correctly!');
        }
    };

    // Validates the fields that belong to the current step and
    // then marks as complete before opening the next step
    $scope.back = function () {
        $scope.validation.errors = false;
        $scope.stages[step].open = false;
        if (step > 0) {
            step -= 1;
        }
        
        $scope.stages[step].open = true;
    };
    
    $scope.submitProfile = function (profile) {
        $scope.submitStatus.submitting = true;
        var params = { 
            'addr_city': profile.addrCity,            
            'addr_first': profile.addrFirst,
            'addr_second': profile.addrSecond, 
            'firstname': profile.firstName,
            'DoB_d': profile.dobDay,
            'DoB_m': profile.dobMonth,
            'DoB_y': profile.dobYear,
            'commonforename': profile.firstName,
            'commonsurname': profile.lastName,
            'othernames': profile.otherNames,
            'surname': profile.lastName,
            'addr_postcode': profile.addrPc,
            'constituency': profile.constituency,
            'email': $scope.email
        };

        $http({
            method: 'POST',
            url: 'http://electionformfiller.herokuapp.com/',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            params: params,
        }).
        success(function(data) {
            $scope.submitStatus.submitting = false;
            $scope.submitStatus.submitted = true;
            console.log(data);
        }).
        error(function(data) {
            $scope.submitStatus.submitting = false;
            $scope.submitStatus.error = true;
            console.log(data);
        });
    };
  });
