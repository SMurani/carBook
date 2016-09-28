/**
 * Created by sammy on 9/13/16.
 */
var booking={
    booking:function () {
        var me= this;
        var ajax=new XMLHttpRequest();
        var bookingPage='<div id=progress-bar>'

            +'<div id=progress-bar-steps>'

            +'<div class="progress-bar-step done">'

            +'<div class=step_number>1'
            +'</div>'

            +' <div class=step_name>Create request'
            +' </div>'

            +' <div class=clear>'
            +'</div>'
            +' </div>'

            +'<div class="progress-bar-step done">'

            +' <div class=step_number>2'
            +' </div>'

            +' <div class=step_name>Choose a car'
            +'</div>'

            +'<div class=clear>'
            +'</div>'
            +' </div>'

            +' <div class="progress-bar-step current">'

            +' <div class=step_number>3'
            +' </div>'

            +' <div class=step_name>Choose extras'
            +'</div>'

            +'<div class=clear>'
            +' </div>'
            +'</div>'

            +'<div class=progress-bar-step>'

            +'<div class=step_number>4'
            +'</div>'

            +' <div class=step_name>Review &amp; Book'
            +' </div>'

            +'<div class=clear>'
            +'</div>'
            +' </div>'
            +' </div>'

            +' <div class=clear>'
            +'</div>'
            +'</div>'

        document.getElementById("ajax-content").innerHTML=bookingPage;



    },
    loadCar:function () {
        var ajax = new XMLHttpRequest();
        var me=this;
        ajax.onreadystatechange = function() {

            if (ajax.readyState == 4) {
                if (ajax.status == 200) {
                    var resp = ajax.responseText;
                    document.getElementById('ajax-content').innerHTML = resp;
                    var jsonRecords = JSON.parse(resp);
                    for (var i in jsonRecords) {
                        var id = jsonRecords[i].id;


                    }

                    var view = '<div class="gallery">';

                    for (var i in jsonRecords) {


                        var uploadUrl = 'uploads/';
                        var id = jsonRecords[i].id;

                        view+='<div class="item category4 category5" style="float: left">'
                            +'<div class="image"><img src=" '+ uploadUrl +jsonRecords[i].photo+'" alt=""/></div>'
                            +' <div class="info">'

                            +' <h4 class="text-center"> '+jsonRecords[i].model+'</h4>'
                            +' <p>'+jsonRecords[i].fuel+' (approximate)</p>'
                            +' <p>'+jsonRecords[i].seats+' Seats</p>'
                            +' <p>'+jsonRecords[i].color+' </p>'
                            +'<p><a href="#" class="read-more">Details</a></p>'
                            +' </div>'

                            +' <div class="details-box"> <span class="box-close">&times;</span>'
                            +'<div class="title">'+jsonRecords[i].model +' Details</div>'
                            +' <div class="inside">'
                            +' <div class="wrapper row-top">'
                            +' <div class="details-image"><img src="'+ uploadUrl +jsonRecords[i].photo+'" alt=""/></div>'
                            +' <div class="details-list">'
                            +' <h4>'+jsonRecords[i].model+'</h4>'
                            +' '+jsonRecords[i].seats+' Passengers<br>'
                            +' '+jsonRecords[i].fuel+' (Approximate)<br>'
                            +' Display: '+jsonRecords[i].display+'<br>'
                            +' Hill Start : '+jsonRecords[i].hillstart+'<br>'
                            +' Speakers: '+jsonRecords[i].speakers+'<br>'
                            +'Transmission Type'+jsonRecords[i].gearType+' </div>'
                            +' </div>'
                            +'<div class="row-bot">'
                            +' <p><strong>Please Note:</strong></p>'
                            +'<ul class="styled-list">'
                            + ' <li><strong>Booking Online: </strong>Allows your car to be reserved for you come pick it. In case we delay to reach you back, you can call +254724 573 725</li>'
                            +'<li><strong>Early Booking:</strong> Allows you to reserve your vehicle and pay at the counter upon collection.</li>'
                            +'<li>The vehicles shown are real. Expect to find the Vehicle you Book at the Booking Station with All the features Mentioned</li>'
                            +'</ul>'
                            +'<a href="#" class="btn btn-default">Book</a> </div>'
                            +'</div>'
                            +'</div>'
                            +' </div>';


                    }

                    view += ' </div>';


                    document.getElementById('ajax-content').innerHTML = view;
                }
            }

        }
        ajax.open("GET", "./vehicle/action", true);
        ajax.send();


    },
    loadBookedCar:function () {

        var ajax = new XMLHttpRequest();
        var me=this;
        ajax.onreadystatechange = function() {
            if (ajax.readyState == 4) {
                if (ajax.status == 200) {
                    var response = ajax.responseText;
                    document.getElementById('ajax-booking').innerHTML = response;
                    console.log(response);

                    var jsonRecord = JSON.parse(response);

                    console.log(jsonRecord.model);

                    var uploadUrl = 'uploads/';
                    console.log(id);
                    var table='<div class="ajaxloader" id="" tabindex="-1" role="dialog" aria-labelledby="">'
                    table+='<div class="">'

                    table += '<div class="inside">';
                    table+='<div>'
                        +'<ol class="breadcrumb">'
                        +'<li><a href="Admin.jsp">Home</a></li>'
                        +'<li><a href="#" onclick="vehicle.list()">Vehicle</a></li>'
                        +'<li class="active">' + jsonRecord.model +'</li>'
                        +'</ol>'
                        +'</div>'
                    table += '  <div class="wrapper row-top">';
                    table += "<div class=\"details-image text-center\" data-width='50px'> <img src=" + uploadUrl + jsonRecord.photo + "  ></div>";
                    table += '  <div class="details-list">';
                    table += "<h4 class='text-center'>" + jsonRecord.model + "</h4>";
                    table += "<p>" + "<b>Vehicle Owner    : </b>"      + jsonRecord.owner +" </p>";
                    table += "<p>" + "<b>Vehicle Type     : </b>"      + jsonRecord.type +" </p>";
                    table += "<p>" + "<b>Vehicle Make     : </b>"      + jsonRecord.make +" </p>";
                    table += "<p>" + "<b>Vehicle Category : </b>"      + jsonRecord.category +" </p>";
                    table += "<p>" + "<b>Vehicle Prcing   : </b>"      + jsonRecord.price +" </p>";
                    table += "<p>" + "<b>Vehicle Seats    : </b>"      + jsonRecord.seats +" </p>";
                    table += "<p>" + "<b>Vehicle Fuel Consumption : </b>" + jsonRecord.fuel +" </p>";
                    table += "<p>" + "<b>Gear Transmission Type : </b>" + jsonRecord.gearType +" </p>";
                    table += "<p>" + "<b>Vehicle Stability : </b>"     + jsonRecord.stability +" </p>";
                    table += "<p>" + "<b>Vehicle vPower   : </b>"      + jsonRecord.vPower +" </p>";
                    table += "<p>" + "<b>Vehicle Display  : </b>"      + jsonRecord.display +" </p>";
                    table += "<p>" + "<b>Vehicle Hillstart: </b>"      + jsonRecord.hillstart +" </p>";
                    table += "<p>" + "<b>Vehicle Speakers : </b>"      + jsonRecord.speakers +" </p>";
                    table += ' </div>';
                    table += '<div class="row-bot">';
                    table += ' <ul class="styled-list">';
                    table += ' <li><strong>Comments: </strong>' + jsonRecord.comments +'</li>';
                    table += ' </ul>';
                    table+='<div class="text-right">'

                    table += ' <a href="#" class="btn btn-sm btn-success" onclick="vehicle.list()" "><i class="fa fa-backward"></i>Back  </a>  ' +
                        '<a href="#" class="btn btn-sm btn-success"><i class="fa fa-print"></i>Print</a>  '
                        + '<a href="#" class="btn btn-sm btn-success"   onclick="vehicle.loadForm('+jsonRecord.id+')" "><i class="fa fa-pencil"></i> Update</a>'
                        + '<a href="#" class="btn btn-sm btn-success"   onclick="vehicle.remove('+jsonRecord.id+')" "><i class="fa fa-trash"></i> Delete</a>'
                    '</div>';

                    table += ' </div>';
                    table += '</div>';




                    table+='</div>';
                    table+=' </div>';
                    table+='</div>';
                    table+='</div>';
                    table+='</div>';




                    document.getElementById('ajax-content').innerHTML = table;


                }
            }

        }

        ajax.open("GET", "./vehicle/load?id="+sessionStorage.getItem("vehicleId"), true);
        ajax.send();
    },
    listAssessories: function(){
        var ajax = new XMLHttpRequest();
        var me=this;
        ajax.onreadystatechange = function(){

            if(ajax.readyState == 4){
                if(ajax.status == 200) {
                    var response = ajax.responseText;
                    document.getElementById('ajax-extras').innerHTML = response;
                    var jsonRecord = JSON.parse(response);

                   var data='<div id=content class=sidebar-middle>'

                       +'<form action="">'

                       +'<div class="widget main-widget product-widget main-widget-3column">'

                       +'<div class="widget-title">'

                       +' <div class=""> <img src="24-rental-car/images/rentalcar/logo.png" alt /> Available Accessories'
                       +' </div>'

                       +'<div class=clear>'
                       +' </div>'
                       +' </div>'
                       +' </div>';

                           for(var i in jsonRecord){
                               var uploadUrl = 'uploads/VehicleExtras/';
                          data+=' <div class=post>'

                                   +'<div class="col-sm-12 row">'

                              +'<div class="checkbox-block col-sm-2">'
                              +'<input type=checkbox class=styled name=checkbox_extras value=1 />'
                              +'</div>'

                              +'<div class=main-block col-sm-6>'

                              +'<div class=product-img> <img src=" '+ uploadUrl +jsonRecord[i].photo + '" />'
                              +' </div>'

                              +'<div class=product-info> <h3 class=entry-format>'+jsonRecord[i].name + '</h3>'

                              +'<div>'+jsonRecord[i].description + ''

                              +' <div class=product-select-count>'
                              +' <select class="selectpicker" name=select_extras>'

                              +' <option>1</option>'

                              +'<option selected=selected>2</option>'
                              +' </select>'
                              +' </div>'
                              data+='</div>'

                              +'<div class=details>'

                                  +'<p>'
                                  +' <a class="btn btn-primary btn-sm" data-toggle="collapse" href="#collapseExample'+jsonRecord[i].id+'" aria-expanded="false" aria-controls="collapseExample">'
                                  +'Read More'
                                  +' </a>'

                                  +'</p>'
                                  +'<div class="collapse" id="collapseExample'+jsonRecord[i].id+'">'
                                  +'<div class="card card-block" style="height: 140px">'
                                      +'<p> Accessory Name: '+jsonRecord[i].name+'</p>'
                                  +'<p> Accessory Owner: '+jsonRecord[i].owner+'</p>'
                                  +'<p> Accessory Price: '+jsonRecord[i].price+'</p>'
                                  +'<p> Accessory Description: '+jsonRecord[i].description+'</p>'
                                  +'</div>'
                                  +'</div>'


                              +' </div>'
                              +'</div>'



                              +' </div>'


                               +' <div class="additional-block col-sm-3">'

                                   +' <p> Ksh. '+jsonRecord[i].price+'</p>'

                               +'</div>'

                               +' <div class=clear>'
                                   +' </div>'

                                   +' </div>'
                                   +' </div>'

                                   +' <div class="post-delimiter">'
                                   +'</div>'
                           }



                                + '</form>'
                                + '</div>';

                    document.getElementById('ajax-extras').innerHTML = data;
                }

                }
                }
        ajax.open("GET", "./vehicleExtras", true);
        ajax.send();


    },

    vehicleDetails:function () {
        var ajax = new XMLHttpRequest();
        var me=this;
        ajax.onreadystatechange = function() {
            if (ajax.readyState == 4) {
                if (ajax.status == 200) {
                    var response = ajax.responseText;
                    document.getElementById('ajax-booking').innerHTML = response;

                    var jsonRecord = JSON.parse(response);


                    var uploadUrl = 'uploads/';
                    console.log(jsonRecord.id);

                    var data='<div id=primary> <aside id=secondary class=sidebar-left>'

                        +'<div class=widget> <h3 class=widget-title> <i class="fa fa-cogs fa-1x" aria-hidden="true"></i> Order Info </h3> <h4> '+jsonRecord.model+' <a href="vehicle.jsp" title>Edit</a> </h4>'

                        +'<div class="widget-content main-block product-widget-mini">'

                        +'<div class=" img-circle"> <img src='+uploadUrl+jsonRecord.photo+' alt />'
                        +'</div>'

                        /*+'<div class="product-img"> <img class="img-responsive" style="height: 150px; width: 150px" src="'+uploadUrl+jsonRecord.photo+'" alt />'
                        +'</div>'*/

                        +'<div class=product-info>'

                        +'<div class=entry-format>'

                        +'<div>'+jsonRecord.model+''
                        +'</div>'

                        +' <span>Economy'
                        +'</span>'
                        +'</div>'

                        +'<div class=features>'

                        +' <p><span class="fa fa-user-times"></span><img  src=images/passenger-icon.png alt /> '+jsonRecord.seats+' Passengers</p>'

                        +'<p><span class="fa fa-suitcase"></span><img src=images/suitcase-icon.png alt /> 3 large suitcases, 2 small suitcase</p>'

                        +'<p><span class="fa fa-cog"></span><img  src=images/transmission-icon.png alt /> '+jsonRecord.gearType+' Transmission</p>'

                        +'<p><span class="fa fa-star-half-o"></span><img  src=images/air-icon.png alt />Air conditioning '+jsonRecord.hillstart+' </p>'

                        +' <p><span class="fa fa-automobile"></span><img  src=images/km_l-icon.png alt />'+jsonRecord.fuel+'</p>'
                        +'</div>'

                        +'<div class=details>'
                        +'<button type="button" class="btn btn-xs btn-info" data-toggle="collapse" data-target="#demo123">More details</button>'

                        +'</div>'
                            
                        +'<div id="demo123" class="collapse">'
                        +' <ul class=details-more>'
                        +' <p><span class="fa fa-file-sound-o ">  '+jsonRecord.speakers+'</p>'
                        +'<p><span class="fa fa-suitcase "> Gear Transmission: '+jsonRecord.gearType+'</p>'
                        +'<p><span class="fa fa-cc-discover ">  System display: '+jsonRecord.display+'</p>'
                        +'<p><span class="fa fa-history ">  Vehicle Stability Control: '+jsonRecord.stability+'</p>'
                        +'<p><span class="fa fa-rocket ">  Hill-start Assist Control: '+jsonRecord.hillstart+'</p>'
                        +'<p><span class="fa fa-rocket "> Description: '+jsonRecord.comments+'</p>'
                        +'</ul>'
                        +' </div>'

                        +'</div>'
                        +'</div>'

                         +'</div> <h5> Date &amp; Location</h5>'

                        +' <div class="widget-content widget-info"> <h4>Pick Up Location and Time</h4>'

                    data+='<div ng-app="">'
                        +' <form class="form-inline" style="padding-left:30px">'
                        +' <div class="form-group">'
                        +'<input type="text" class="form-control" ng-model="pickLocation" id="exampleInputEmail2" placeholder="location">'
                        +' </div>'
                        +' </form>'

                        +'<div class="row" style="padding-left:40px">'

                        +'<input type="text" class="form-control datetimepicker" id="returnDate" ng-model="pickDate">'
                        +'<select name="select" class="select" ng-model="pickTime">'
                        +'<option>10:00</option>'
                        +' <option>12:00</option>'
                        +' <option>14:00</option>'
                        +'<option>16:00</option>'
                        +'<option>18:00</option>'
                        +'<option>20:00</option>'
                        +'<option>22:00</option>'
                        +'</select>'
                        +'</div>'

                        +' <div class="widget-content widget-info"> <h4>Return Location and Time</h4>'
                            data+=' <form class="form-inline" style="padding-left:30px">'
                            +' <div class="form-group">'
                            +'<input type="text" class="form-control" id="exampleInputEmail2" placeholder="return location" ng-model="returnLocation">'
                            +' </div>'
                            +' </form>'

                            +'<div class="row" style="padding-left:40px">'

                            +'<input type="text" class="form-control datetimepicker" id="returnDate" ng-model="returnDate">'
                            +'<select name="select" class="select" ng-model="returnTime">'
                            +'<option>10:00</option>'
                            +' <option>12:00</option>'
                            +' <option>14:00</option>'
                            +'<option>16:00</option>'
                            +'<option>18:00</option>'
                            +'<option>20:00</option>'
                            +'<option>22:00</option>'
                            +'</select>'
                            +'</div>'
                                +' </form>'
                                +'</div>'

                        +'<p>Summary Details</p>'
                                +'<h6><b>Pickup location: </b></h6> <p>{{pickLocation}}</p>'
                                +'<h6><b>Pickup Date: </b></h6> <p>{{pickDate}}</p>'
                                +'<h6><b>Pickup Time: </b></h6> <p>{{pickTime}}</p>'
                                +'<h6><b>Return location: </b></h6> <p>{{returnLocation}}</p>'
                                +'<h6><b>Return Date: </b></h6> <p>{{returnDate}}</p>'
                                +'<h6><b>Return Time: </b></h6> <p>{{returnTime}}</p>'
                                +'<h6><b>Return Time: </b></h6> <p>{{returnTime}}</p>'






                        data+=' <div class=subtotal_content>'

                        +'  <div class=subtotal> Subtotal:'

                        +'<span class=price>Ksh '+jsonRecord.price+'.00'
                        +' </span>'
                        +'</div>'
                        +'</div>'
                        +'</div> <h4 class=extras>Extras</h4>'

                        +' <div class="widget-content widget-extras">'

                        +'<p>Infant Child Seats x 2'

                        +'<span class=price>$200.00'
                        +'</span></p>'

                        +'<p>NeverLost'

                        +' <span class=price>$129.99'
                        +'</span></p>'
                        +'</div>'

                        +'<div class="widget-footer widget-footer-total"> Total:'

                        +'<span class=price>$3897.99'
                        +' </span>'
                        +'</div>'
                        +'</div> </aside>';
                    document.getElementById('ajax-booking').innerHTML = data;



                }
            }

        }


        ajax.open("GET", "./vehicle/load?id="+sessionStorage.getItem("vehicleId"), true);
        ajax.send();
    },

    vehicleExtras:function () {
        var ajax = new XMLHttpRequest();
        var me=this;
        ajax.onreadystatechange = function(){

            if(ajax.readyState == 4){
                if(ajax.status == 200) {
                    var response = ajax.responseText;
                    document.getElementById('ajax-extras').innerHTML = response;
                    var jsonRecord = JSON.parse(response);


        var data='<div id=content class=sidebar-middle>'

            +'<form action="">'

            +'<div class="widget main-widget product-widget main-widget-3column">'

            +'<div class=widget-title>'

            +'<div> <img src=images/list.png alt /> Available Extras'
            +'</div>'

            +'<div class=clear>'
            +'</div>'
            +'</div>'


                    for(var i in jsonRecord) {
                        var uploadUrl = 'uploads/VehicleExtras/';
                        var ExtraId = +jsonRecord[i].id+"-order";
                        data+='<div class="post">'

                            +'<div class=main-block_container>'

                            +' <div class=checkbox-block>'
                            +'<input type=checkbox class=styled name=checkbox_extras value="'+jsonRecord[i].id+'" />'
                            +' </div>'

                            +'<div class=main-block>'

                            +'<div class="product-img"> <img class="img-responsive" style="height: 150px; width: 150px" src="'+uploadUrl+jsonRecord[i].photo+'" alt />'
                            +'</div>'

                            +'<div class=product-info> <h3 class=entry-format>'+jsonRecord[i].name+'</h3>'

                            +' <div>'+jsonRecord[i].description+''
                            +'</div>'

                            +'<div class=details>'
                            +'<button type="button" class="btn btn-xs btn-info" data-toggle="collapse" data-target="#demo'+jsonRecord[i].id+'">More details</button>'

                            +'</div>'
                            +'<div id="demo'+jsonRecord[i].id+'" class="collapse">'
                            +'"'+jsonRecord[i].description+'"'
                            +' </div>'
                            +'</div>'

                            +'</div>'

                            +'<div class=additional-block>'

                            +' <p>'+jsonRecord[i].price+'</p>'
                            +' </div>'

                            +'<div class=clear>'
                            +'</div>'
                            +' </div>'
                            +' </div>'

                            +' <div class=post-delimiter>'
                            +' </div>'

                    }

                    data+='<div class=next_page>'
                   // +'<input class="continue_button blue_button" type=submit value="Continue to checkout" onclick="booking.booking()" />'
                        //+'<input class="" type=submit value="Continue to checkout" onclick="booking.booking()" />'
                    data += " <a href=\"#\" class=\"btn btn-default\"  onclick='booking.booking()'>Order now</a> </div>"
                    +'</div>'
                    +'</form>'
                    +'</div>';

                    document.getElementById('ajax-extras').innerHTML = data;
                }
            }
            }

        ajax.open("GET", "./vehicleExtras", true);
        ajax.send();

    },
    booking:function () {
        window.location="ReviewBooking.jsp"
    }
};
function listRoutes(){
    document.getElementById('ajax-extras').innerHTML = 'We will load routes here!';
}

(function init(){
   // booking.listAssessories();
})();
(function init(){
    booking.vehicleDetails();
})();
(function init(){
    booking.vehicleExtras();
})();
