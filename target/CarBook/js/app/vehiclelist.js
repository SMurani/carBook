/**
 * Created by sammy on 9/11/16.
 */

var vehicle={
    loadCar1:function () {
        var ajax = new XMLHttpRequest();
        var me=this;
        ajax.onreadystatechange = function() {

            if (ajax.readyState == 4) {
                if (ajax.status == 200) {
                    var resp = ajax.responseText;
                    document.getElementById('vehicle-gallery').innerHTML = resp;
                    var jsonRecords = JSON.parse(resp);
                    for (var i in jsonRecords) {
                        var id = jsonRecords[i].id;


                    }

                    var view = '<div class="gallery">';

                    for (var i in jsonRecords) {


                        var uploadUrl = 'uploads/';
                        var id = jsonRecords[i].id;
                        view += '<div class="item category4 category5" style="float: left;">';
                        view += "<div class=\"image\"> <img src=" + uploadUrl + jsonRecords[i].photo + " ></div>";
                        view += " <div class=\"info\">";
                        view += "<h4 class='text-center'>" + jsonRecords[i].model + "</h4>";
                        view += "<p>" + "<b>No of Seats : </b>" + jsonRecords[i].seats +" </p>";
                        view += "<p>" + "<b>Approximate Fuel Consumption: </b>" + jsonRecords[i].fuel +" </p>";
                        view+="<p><a href=\"#\" class=\"read-more\" onclick=\"vehicle.readMore(" +jsonRecords[i].id+ ") \">Details</a></p>";

                        view += '</div>';
                        view+='<div class="details-box" id="details-view" > <span class="box-close text-center">&times;</span>';
                        view += '</div>';
                        view += '</div>';

                    }

                    view += ' </div>';


                    document.getElementById('vehicle-gallery').innerHTML = view;
                }
            }

        }
        ajax.open("GET", "./vehicle/action", true);
        ajax.send();


    },
    loadCar:function () {
        var ajax = new XMLHttpRequest();
        var me=this;
        ajax.onreadystatechange = function() {

            if (ajax.readyState == 4) {
                if (ajax.status == 200) {
                    var resp = ajax.responseText;
                    document.getElementById('vehicle-gallery').innerHTML = resp;
                    var jsonRecords = JSON.parse(resp);

                    var view = '<div class="gallery">';

                    for (var i in jsonRecords) {
                        var VorderId = +jsonRecords[i].id+"-order";


                       // sessionStorage.setItem("vehicleId",jsonRecords[i].id);
                        //var sessData=sessionStorage.setItem("vehicleId",jsonRecords[i].id);

                        var uploadUrl = 'uploads/';
                        var id = jsonRecords[i].id;

                    view+='<div class="item category4 category5">'
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
                        +'<a href="#" class="btn btn-default"  id ='+VorderId+'>Book Car</a> </div>'
                        +'</div>'
                        +'</div>'
                    +' </div>';


                    }

                    view += ' </div>';


                    document.getElementById('vehicle-gallery').innerHTML = view;
                    if(document.getElementById('vehicle-gallery').innerHTML = view){
                        var object = new Object(jsonRecords);
                        object.forEach(function (el) {
                            var id = el.id+"-order";
                            document.getElementById(id).addEventListener("click", function(){
                                sessionStorage.setItem("vehicleId", el.id);
                                vehicle.booking();
                            })
                        })


                    }
                }
            }

        }
        ajax.open("GET", "./vehicle/action", true);
        ajax.send();


    },
    readMore:function (id) {

        var ajax = new XMLHttpRequest();
        var me=this;
        ajax.onreadystatechange = function() {

            if (ajax.readyState == 4) {
                if (ajax.status == 200) {
                    var response = ajax.responseText;
                    document.getElementById('details-view').innerHTML = response;
                    console.log(response);

                    var jsonRecord = JSON.parse(response);

                    console.log(jsonRecord.model);


                    var uploadUrl = 'uploads/';
                    console.log(id);



                    //var view = '  <div class="details-box"> <span class="box-close">&times;</span>';
                    var view = ' <div class="title">Vehicle Details</div>';
                    view += '<div class="inside">';
                    view += '  <div class="wrapper row-top">';
                    view += "<div class=\"details-image\"> <img src=" + uploadUrl + jsonRecord.photo + " ></div>";
                    view += '  <div class="details-list">';
                    view += "<h4 >" + jsonRecord.model + "</h4>";
                    view += "<p>" + "<b>No of Passengers : </b>" + jsonRecord.seats +" </p>";
                    view += "<p>" + "<b>Transmission Type : </b>" + jsonRecord.gearType +" </p>";
                    view += "<p>" + "<b>Dispay : </b>" + jsonRecord.display +" </p>";
                    view += "<p>" + "<b>Hill Start : </b>" + jsonRecord.hillstart +" </p>";
                    view += ' Speakers: '+jsonRecord.speakers+' </div>';
                    view += ' </div>';
                    view += '<div class="row-bot">';
                    view += ' <p><strong>Please Note:</strong></p>';
                    view += ' <ul class="styled-list">';
                    view += ' <li><strong>Booking Online: </strong>Allows your car to be reserved for you come pick it. In case we delay to reach you back, you can call +254724 573 725</li>';
                    view += '  <li><strong>Providing Details :</strong> Please provide us with your full details</li>';
                    view += ' <li>All vehicles are given in good condition, and we have can aslo provide drivers for requests.</li>';
                    view += ' </ul>';
                    view += ' <a href="#" class="btn btn-default">Save for my reservation</a> </div>';
                    view += ' </div>';
                    view += '</div>';



                }
                document.getElementById('details-view').innerHTML = view;
            }
        }
        ajax.open("GET", "./vehicle/load?id="+id, true);
        ajax.send();

    },loadCategoryAutomatic:function () {
        var ajax = new XMLHttpRequest();
        var me=this;
        ajax.onreadystatechange = function() {

            if (ajax.readyState == 4) {
                if (ajax.status == 200) {
                    var resp = ajax.responseText;
                    document.getElementById('vehicle-gallery').innerHTML = resp;
                    var jsonRecords = JSON.parse(resp);
                    for (var i in jsonRecords) {
                        var id = jsonRecords[i].id;


                    }

                    var view = '<div class="gallery">';

                    for (var i in jsonRecords) {


                        var uploadUrl = 'uploads/';
                        var id = jsonRecords[i].id;
                        view += '<div class="item category2" style="float: left;">';
                        view += "<div class=\"image\"> <img src=" + uploadUrl + jsonRecords[i].photo + " ></div>";
                        view += " <div class=\"info\">";
                        view += "<h4 class='text-center'>" + jsonRecords[i].model + "</h4>";
                        view += "<p>" + "<b>No of Seats : </b>" + jsonRecords[i].seats +" </p>";
                        view += "<p>" + "<b>Approximate Fuel Consumption: </b>" + jsonRecords[i].fuel +" </p>";
                        view+="<p><a href=\"#\" class=\"read-more\" onclick=\"vehicle.readMore(" +jsonRecords[i].id+ ") \">Details</a></p>";

                        view += '</div>';
                        view+='<div class="details-box" id="details-view" > <span class="box-close text-center">&times;</span>';
                        view += '</div>';
                        view += '</div>';

                    }

                    view += ' </div>';


                    document.getElementById('vehicle-gallery').innerHTML = view;
                }
            }

        }
        ajax.open("GET", "./vehicle/loadCategoryAutomatic", true);
        ajax.send();


    },
    loadCategoryGreenCollection:function () {
        var ajax = new XMLHttpRequest();
        var me=this;
        ajax.onreadystatechange = function() {

            if (ajax.readyState == 4) {
                if (ajax.status == 200) {
                    var resp = ajax.responseText;
                    document.getElementById('vehicle-gallery').innerHTML = resp;
                    var jsonRecords = JSON.parse(resp);
                    for (var i in jsonRecords) {
                        var id = jsonRecords[i].id;


                    }

                    var view = '<div class="gallery">';

                 /*   for (var i in jsonRecords) {


                        var uploadUrl = 'uploads/';
                        var id = jsonRecords[i].id;
                        view += '<div class="item category6" style="float: left;">';
                        view += "<div class=\"image\"> <img src=" + uploadUrl + jsonRecords[i].photo + " ></div>";
                        view += " <div class=\"info\">";
                        view += "<h4 class='text-center'>" + jsonRecords[i].model + "</h4>";
                        view += "<p>" + "<b>No of Seats : </b>" + jsonRecords[i].seats +" </p>";
                        view += "<p>" + "<b>Approximate Fuel Consumption: </b>" + jsonRecords[i].fuel +" </p>";
                        view+="<p><a href=\"#\" class=\"read-more\" onclick=\"vehicle.readMore(" +jsonRecords[i].id+ ") \">Details</a></p>";

                        view += '</div>';
                        view+='<div class="details-box" id="details-view" > <span class="box-close text-center">&times;</span>';
                        view += '</div>';
                        view += '</div>';

                    }*/
                    for (var i in jsonRecords) {


                        var uploadUrl = 'uploads/';
                        var id = jsonRecords[i].id;

                        view+='<div class="item category6" style="float: left;">'
                            +'<div class="image"><img src=" '+ uploadUrl +jsonRecords[i].photo+'" alt=""/></div>'
                            +' <div class="info">'

                            +' <h4 class="text-center"> '+jsonRecords[i].model+'</h4>'
                            +' <p>'+jsonRecords[i].fuel+' (approximate)</p>'
                            +' <p>'+jsonRecords[i].seats+' Seats</p>'
                            +' <p>'+jsonRecords[i].color+' </p>'
                            +'<p><a href="#" class="read-more1">Details</a></p>'
                            +' </div>'

                            +' <div class="details-box1"> <span class="box-close">&times;</span>'
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


                    document.getElementById('vehicle-gallery').innerHTML = view;
                }
            }

        }
        ajax.open("GET", "./vehicle/loadCategoryGreenCollection", true);
        ajax.send();


    },
    loadCategoryDreamCollection:function () {
        var ajax = new XMLHttpRequest();
        var me=this;
        ajax.onreadystatechange = function() {

            if (ajax.readyState == 4) {
                if (ajax.status == 200) {
                    var resp = ajax.responseText;
                    document.getElementById('vehicle-gallery').innerHTML = resp;
                    var jsonRecords = JSON.parse(resp);
                    for (var i in jsonRecords) {
                        var id = jsonRecords[i].id;


                    }

                    var view = '<div class="gallery">';

                    for (var i in jsonRecords) {


                        var uploadUrl = 'uploads/';
                        var id = jsonRecords[i].id;
                        view += '<div class="item category3" style="float: left;">';
                        view += "<div class=\"image\"> <img src=" + uploadUrl + jsonRecords[i].photo + " ></div>";
                        view += " <div class=\"info\">";
                        view += "<h4 class='text-center'>" + jsonRecords[i].model + "</h4>";
                        view += "<p>" + "<b>No of Seats : </b>" + jsonRecords[i].seats +" </p>";
                        view += "<p>" + "<b>Approximate Fuel Consumption: </b>" + jsonRecords[i].fuel +" </p>";
                        view+="<p><a href=\"#\" class=\"read-more\" onclick=\"vehicle.readMore(" +jsonRecords[i].id+ ") \">Details</a></p>";

                        view += '</div>';
                        view+='<div class="details-box" id="details-view" > <span class="box-close text-center">&times;</span>';
                        view += '</div>';
                        view += '</div>';

                    }

                    view += ' </div>';


                    document.getElementById('vehicle-gallery').innerHTML = view;
                }
            }

        }
        ajax.open("GET", "./vehicle/loadCategoryDreamCollection", true);
        ajax.send();


    },
    loadCategoryFamilyCollection:function () {
        var ajax = new XMLHttpRequest();
        var me=this;
        ajax.onreadystatechange = function() {

            if (ajax.readyState == 4) {
                if (ajax.status == 200) {
                    var resp = ajax.responseText;
                    document.getElementById('vehicle-gallery').innerHTML = resp;
                    var jsonRecords = JSON.parse(resp);
                    for (var i in jsonRecords) {
                        var id = jsonRecords[i].id;

                    }
                    if(jsonRecords=="[]"){
                        alert("Empty");
                        console.log("no record");
                        var view = '<div class="gallery">';
                        view+='<p>No record Found</p>'
                        view +='<\div>'



                    }
                    else
                    {
                        var view = '<div class="gallery">';

                        for (var i in jsonRecords) {


                            var uploadUrl = 'uploads/';
                            var id = jsonRecords[i].id;
                            view += '<div class="item category4" style="float: left;">';
                            view += "<div class=\"image\"> <img src=" + uploadUrl + jsonRecords[i].photo + " ></div>";
                            view += " <div class=\"info\">";
                            view += "<h4 class='text-center'>" + jsonRecords[i].model + "</h4>";
                            view += "<p>" + "<b>No of Seats : </b>" + jsonRecords[i].seats + " </p>";
                            view += "<p>" + "<b>Approximate Fuel Consumption: </b>" + jsonRecords[i].fuel + " </p>";
                            view += "<p><a href=\"#\" class=\"read-more\" onclick=\"vehicle.readMore(" + jsonRecords[i].id + ") \">Details</a></p>";

                            view += '</div>';
                            view += '<div class="details-box" id="details-view" > <span class="box-close text-center">&times;</span>';
                            view += '</div>';
                            view += '</div>';

                        }

                        view += ' </div>';

                    }
                    document.getElementById('vehicle-gallery').innerHTML = view;
                }
            }

        }
        ajax.open("GET", "./vehicle/loadCategoryFamilyCollection", true);
        ajax.send();


    },
    loadCategoryPrestige:function () {
        var ajax = new XMLHttpRequest();
        var me=this;
        ajax.onreadystatechange = function() {

            if (ajax.readyState == 4) {
                if (ajax.status == 200) {
                    var resp = ajax.responseText;
                    document.getElementById('vehicle-gallery').innerHTML = resp;
                    var jsonRecords = JSON.parse(resp);
                    for (var i in jsonRecords) {
                        var id = jsonRecords[i].id;


                    }

                    var view = '<div class="gallery">';

                    for (var i in jsonRecords) {


                        var uploadUrl = 'uploads/';
                        var id = jsonRecords[i].id;
                        view += '<div class="item category5" style="float: left;">';
                        view += "<div class=\"image\"> <img src=" + uploadUrl + jsonRecords[i].photo + " ></div>";
                        view += " <div class=\"info\">";
                        view += "<h4 class='text-center'>" + jsonRecords[i].model + "</h4>";
                        view += "<p>" + "<b>No of Seats : </b>" + jsonRecords[i].seats +" </p>";
                        view += "<p>" + "<b>Approximate Fuel Consumption: </b>" + jsonRecords[i].fuel +" </p>";
                        view+="<p><a href=\"#\" class=\"read-more\" onclick=\"vehicle.readMore(" +jsonRecords[i].id+ ") \">Details</a></p>";

                        view += '</div>';
                        view+='<div class="details-box" id="details-view" > <span class="box-close text-center">&times;</span>';
                        view += '</div>';
                        view += '</div>';

                    }

                    view += ' </div>';


                    document.getElementById('vehicle-gallery').innerHTML = view;
                }
            }

        }
        ajax.open("GET", "./vehicle/loadCategoryPrestige", true);
        ajax.send();


    },
    loadCategoryVans:function () {
        var ajax = new XMLHttpRequest();
        var me=this;
        ajax.onreadystatechange = function() {

            if (ajax.readyState == 4) {
                if (ajax.status == 200) {
                    var resp = ajax.responseText;
                    document.getElementById('vehicle-gallery').innerHTML = resp;
                    var jsonRecords = JSON.parse(resp);
                    for (var i in jsonRecords) {
                        var id = jsonRecords[i].id;


                    }

                    var view = '<div class="gallery">';

                    for (var i in jsonRecords) {


                        var uploadUrl = 'uploads/';
                        var id = jsonRecords[i].id;
                        view += '<div class="item category1" style="float: left;">';








                        view += "<div class=\"image\"> <img src=" + uploadUrl + jsonRecords[i].photo + " ></div>";
                        view += " <div class=\"info\">";
                        view += "<h4 class='text-center'>" + jsonRecords[i].model + "</h4>";
                        view += "<p>" + "<b>No of Seats : </b>" + jsonRecords[i].seats +" </p>";
                        view += "<p>" + "<b>Approximate Fuel Consumption: </b>" + jsonRecords[i].fuel +" </p>";
                        view+="<p><a href=\"#\" class=\"read-more\" onclick=\"vehicle.readMore(" +jsonRecords[i].id+ ") \">Details</a></p>";

                        view += '</div>';
                        view+='<div class="details-box" id="details-view" > <span class="box-close text-center">&times;</span>';
                        view += '</div>';
                        view += '</div>';

                    }

                    view += ' </div>';


                    document.getElementById('vehicle-gallery').innerHTML = view;
                }
            }

        }
        ajax.open("GET", "./vehicle/loadCategoryVans", true);
        ajax.send();


    },
    booking:function () {
        window.location="Booking.jsp"
    }

}
function listRoutes(){
    document.getElementById('ajax-content').innerHTML = 'We will load routes here!';
}

(function init(){
    vehicle.loadCar();
})();
