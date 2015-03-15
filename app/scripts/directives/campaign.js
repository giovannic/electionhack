'use strict';

/**
 * @ngdoc directive
 * @name electionhackApp.directive:campaign
 * @description
 * # campaign
 */
angular.module('electionhackApp')
  .directive('campaign', function ($http, angularLoad) {
    return {
      restrict: 'E',
      scope: {
        src: '@'
      },
      link: function postLink(scope, element, attrs) {
        var src = scope.src;
        src = "http://www.crowdfunder.co.uk/" + src +
        "/widget.js/";
        angularLoad.loadScript(src).then(function() {
          element.html(html);
        }); //well this hack is absolute filth
        //var s = document.createElement("script");
        //s.type = "text/javascript";                
        //var src = element.attr('src');
        //src = "http://www.crowdfunder.co.uk/" + src +
        //"/widget.js/";
        //$http.get(src).then(function(response) {
          //console.log(response);
        //})
        //s.src = src;
        //document.head.appendChild(s);
        //element.remove();
      }
    };
  });
