'use strict';

angular.module('myApp')

.controller('homeController',
  ['$scope', 'homeService', 
  function ($scope, homeService) {  

    homeService.getData(function(response){

      $scope.orders = response.orders;
      $scope.exactOneOrders = response.exactOneOrders;
      $scope.exactTwoOrders = response.exactTwoOrders;
      $scope.exactThreeOrders = response.exactThreeOrders;
      $scope.exactFourOrders = response.exactFourOrders;
      $scope.fivePlusOrders = response.fivePlusOrders;
      $scope.totalAmountOfOrders = response.totalAmountOfOrders;

      $scope.exactOneOrdersCustomerList = response.exactOneOrdersCustomerList;

      $scope.config = {
        title: 'Number Of Orders',
        tooltips: true,
        labels: false,
        mouseover: function() {},
        mouseout: function() {},
        click: function() {},
        legend: {
          display: true,
          //could be 'left, right'
          position: 'right'
        }
      };

      console.log($scope.exactOneOrders)

      $scope.data = {
        series: ['Orders'],
        data: [{
          x: "Once",
          y: [parseInt($scope.exactOneOrders)]
          //tooltip: "this is tooltip"
        }, {
          x: "Twice",
          y: [parseInt($scope.exactTwoOrders)]
        }, {
          x: "Thrice",
          y: [parseInt($scope.exactThreeOrders)]
        }, {
          x: "Four",
          y: [parseInt($scope.exactFourOrders)]
        }, {
          x: "Five Plus",
          y: [parseInt($scope.fivePlusOrders)]
        }]
      };


    });
  }
]);
