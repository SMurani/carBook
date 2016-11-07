/**
 * Created by sammy on 9/19/16.
 */
var car={
    loadTable:function () {
        var uploadUrl='uploads/';
        var Table='<section class="wrapper content-panel">'
            +'<div>'
            +'<ol class="breadcrumb">'
            +'<li><a href="Admin.jsp">Home</a></li>'
            +'<li class="active"><a href="#" onclick="vehicle.list()">Vehicles</a></li>'
            +'</ol>'
            +'</div>'

            +'<div class="heading1">'
            +'<h2 class="text-center">Vehicle Details</h2>'
            +' </div>'
            +'<div id="table">'
            +'</div>'
            +' <form class="form-inline">'
            +'<tr>'
            +'<td>'
            +'<button class=\"btn-success btn-sm pull-left \"  type=\"submit\" onclick=\"vehicle.add()\"><span class=\"fa fa-plus\"></span>Add</button>'
            +'</td>'
            +'<td>'
            +'<div class="form-group pull-right">'
            +'<input type="text" name="" ng-model="search" class="form-control" placeholder="search...">'
            +' </div>'
            +'<td>'
            +'</tr>'
            +' </form>'
            +' <div ng-controller="listdata">'
            +'<table class="table display table table-bordered\ table-hover">'

            +' <thead>'
            +'<tr>'
            +'<th>#</th>'

            +'<th ng-click="sort(\'id\')"></a>Owner'
            +' <span class="fa fa-sort" ng-show="sortKey==\'id\'" ng-class="{\'fa fa-up\':reverse,\'fa fa-down\':!reverse}"></span>'
            +' </th>'

            +'<th ng-click="sort(\'id\')">Model'
            +' <span class="fa fa-sort" ng-show="sortKey==\'id\'" ng-class="{\'fa fa-up\':reverse,\'fa fa-down\':!reverse}"></span>'
            +' </th>'

            Table+='<th ng-click="sort(\'id\')">Type'
            +' <span class="fa fa-sort" ng-show="sortKey==\'id\'" ng-class="{\'fa fa-up\':reverse,\'fa fa-down\':!reverse}"></span>'
            +' </th>'
            +'<th ng-click="sort(\'id\')">Color'
            +' <span class="fa fa-sort" ng-show="sortKey==\'id\'" ng-class="{\'fa fa-up\':reverse,\'fa fa-down\':!reverse}"></span>'
            +' </th>'
            +'<th ng-click="sort(\'id\')">Price Per Day'
            +' <span class="fa fa-sort" ng-show="sortKey==\'id\'" ng-class="{\'fa fa-up\':reverse,\'fa fa-down\':!reverse}"></span>'
            +' </th>'
            +'<th ng-click="sort(\'id\')">Fuel Consumption'
            +' <span class="fa fa-sort" ng-show="sortKey==\'id\'" ng-class="{\'fa fa-up\':reverse,\'fa fa-down\':!reverse}"></span>'
            +' </th>'
            +'<th ng-click="sort(\'id\')">No of Seats'
            +' <span class="fa fa-sort" ng-show="sortKey==\'id\'" ng-class="{\'fa fa-up\':reverse,\'fa fa-down\':!reverse}"></span>'
            +' </th>'
                +'<th ng-click="sort(\'id\')">Gear Type'
                +' <span class="fa fa-sort" ng-show="sortKey==\'id\'" ng-class="{\'fa fa-up\':reverse,\'fa fa-down\':!reverse}"></span>'
                +' </th>'
            +'<th ng-click="sort(\'id\')">Photo'
            +' <span class="fa fa-sort" ng-show="sortKey==\'id\'" ng-class="{\'fa fa-up\':reverse,\'fa fa-down\':!reverse}"></span>'
            +' </th>'
            +'<th>Actions</th>'
            +' </tr>'
            +'</thead>'
            +' <tbody>'
            +' <!-- <tr ng-repeat="vehicle in vehicles | filter:search | orderBy:sortKey:reverse"> -->'
            +'<tr dir-paginate="vehicle in vehicles | itemsPerPage:6 | filter:search | orderBy:sortKey:reverse">'
            +' <td></td>'
            +'<td>{{vehicle.owner}}</td>'
            +'<td>{{vehicle.model}}</td>'
            +' <td>{{vehicle.type}}</td>'
            +'<td>{{vehicle.color}}</td>'
            +'<td>{{vehicle.price}}</td>'
            +'<td>{{vehicle.fuel}}</td>'
            +'<td>{{vehicle.seats}}</td>'
            +' <td>{{vehicle.gearType}}</td>'
            +'<td><img src="'+uploadUrl+'{{vehicle.photo}}" width="50px" height="50px"></td>'
           

        Table+='<td><a class="btn btn-sm" onclick=\"vehicle.viewRecord(37)\" '
            +'"\"><i class=\"fa fa-eye fa-1x\" aria-hidden=\"true\"></i></a>|'
            +'<a class=\"btn btn-sm\" onclick=""><i class=\"fa fa-pencil fa-1x\" aria-hidden=\"true\"></i></a>'
            +' |<a class=\"btn btn-sm\" onclick=""><i class=\"fa fa-trash-o fa-1x\" aria-hidden=\"true\"></i></a>'
            +' </td>'


            +' </tr>'
            +'</tbody>'
            +'<dir-pagination-controls'
            +' [max-size="5"] '
            +' [direction-links="true"] '
            +' [boundary-links="true"] '
            +' [on-page-change=""] '
            +' [pagination-id=""] '
            +' [template-url=""] '
            +' [auto-hide="true"]> '
            +'</dir-pagination-controls>'
            +'</table>'
            +'</div>'
            +'</section>'

        document.getElementById('ajax-content').innerHTML = Table;
    }
};

/*(function init(){
     car.loadTable();
})();*/




var app=angular.module('angularTable',['angularUtils.directives.dirPagination']);

app.controller('listdata',function($scope, $http){
    $scope.vehicles=[];
    //$http.get('mockjson/mock.json').success(function(response){
    $http(/*'http://localhost:8080/CarBook/vehicle/list'*/
        {
            method : 'GET',
            url : 'http://localhost:8080/CarBook/vehicle/list'
        })
        .success(function(response){
            $scope.vehicles=response;
            console.log("The response is:" +$scope);
        })
        .error(function(response, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log(response + 'The server encountered an error');
        });
    $scope.sort=function(keyname){
        $scope.sortKey=keyname;
        $scope.reverse = !$scope.reverse;
    }

});
