/**
 * Created by sammy on 8/27/16.
 */

var price={
    loadCar:function () {
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
                       // (jsonRecords[i].category);


                    }

                    var view = '<div class="price-table">';

                    for (var i in jsonRecords) {


                        var uploadUrl = 'uploads/';
                        var id = jsonRecords[i].id;
                        view += '<div class="item category2 category4">';
                        view +='<div class="wrapper">'
                        view += "<div class=\"image\"> <img src=" + uploadUrl + jsonRecords[i].photo + " class=\"img-responsive\"></div>";
                        view += " <div class=\"info\">";
                        view +=" <div class=\"wrapper\">";
                        view += "<h4 class='upper pull-left'>" + jsonRecords[i].model + "</h4>";
                        view +="<a href=\"#\" class=\"upper similar\">or similar</a></div>";
                        view +="<p>" + "" + jsonRecords[i].type +" <br>"
                            + jsonRecords[i].seats +" Passengers<br>"
                            + "" + jsonRecords[i].speakers +" <br>"
                            +"" + jsonRecords[i].display +"  <br>"
                            +"Transmission Type: " + jsonRecords[i].gearType+" <br>"
                            +"" + jsonRecords[i].fuel +" (approximate)"
                        view+="</p>"
                        view += "</div>"
                        view += "<div class=\"price-outer\">"
                        view += " <div class=\"price\"> "+ jsonRecords[i].price +" Ksh &nbsp;&nbsp; <span>per / day</span></div>"
                        view += " <p>Unlimited Free Miles Included</p>"
                        view += " <a href=\"#\" class=\"btn btn-default\">Order now</a> </div>"
                        view += "</div>"
                        view += "</div>"



                    }

                    view += ' </div>';


                    document.getElementById('vehicle-gallery').innerHTML = view;
                }
            }

        }
        ajax.open("GET", "./vehicle/action", true);
        ajax.send();


    }, 
    loadCategoryAutomatic:function () {
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
                        // (jsonRecords[i].category);


                    }

                    var view = '<div class="price-table">';

                    for (var i in jsonRecords) {


                        var uploadUrl = 'uploads/';
                        var id = jsonRecords[i].id;
                        view += '<div class="item category2">';
                        view +='<div class="wrapper">'
                        view += "<div class=\"image\"> <img src=" + uploadUrl + jsonRecords[i].photo + " class=\"img-responsive\"></div>";
                        view += " <div class=\"info\">";
                        view +=" <div class=\"wrapper\">";
                        view += "<h4 class='upper pull-left'>" + jsonRecords[i].model + "</h4>";
                        view +="<a href=\"#\" class=\"upper similar\">or similar</a></div>";
                        view +="<p>" + "" + jsonRecords[i].type +" <br>"
                            + jsonRecords[i].seats +" Passengers<br>"
                            + "" + jsonRecords[i].speakers +" <br>"
                            +"" + jsonRecords[i].display +"  <br>"
                            +"Transmission Type: " + jsonRecords[i].gearType+" <br>"
                            +"" + jsonRecords[i].fuel +" (approximate)"
                        view+="</p>"
                        view += "</div>"
                        view += "<div class=\"price-outer\">"
                        view += " <div class=\"price\"> "+ jsonRecords[i].price +" Ksh &nbsp;&nbsp; <span>per / day</span></div>"
                        view += " <p>Unlimited Free Miles Included</p>"
                        view += " <a href=\"#\" class=\"btn btn-default\">Order now</a> </div>"
                        view += "</div>"
                        view += "</div>"



                    }

                    view += ' </div>';


                    document.getElementById('vehicle-gallery').innerHTML = view;
                }
            }

        }
        ajax.open("GET", "./vehicle/loadCategoryAutomatic", true);
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
                        // (jsonRecords[i].category);


                    }

                    var view = '<div class="price-table">';

                    for (var i in jsonRecords) {


                        var uploadUrl = 'uploads/';
                        var id = jsonRecords[i].id;
                        view += '<div class="item category2 category4">';
                        view +='<div class="wrapper">'
                        view += "<div class=\"image\"> <img src=" + uploadUrl + jsonRecords[i].photo + " class=\"img-responsive\"></div>";
                        view += " <div class=\"info\">";
                        view +=" <div class=\"wrapper\">";
                        view += "<h4 class='upper pull-left'>" + jsonRecords[i].model + "</h4>";
                        view +="<a href=\"#\" class=\"upper similar\">or similar</a></div>";
                        view +="<p>" + "" + jsonRecords[i].type +" <br>"
                            + jsonRecords[i].seats +" Passengers<br>"
                            + "" + jsonRecords[i].speakers +" <br>"
                            +"" + jsonRecords[i].display +"  <br>"
                            +"Transmission Type: " + jsonRecords[i].gearType+" <br>"
                            +"" + jsonRecords[i].fuel +" (approximate)"
                        view+="</p>"
                        view += "</div>"
                        view += "<div class=\"price-outer\">"
                        view += " <div class=\"price\"> "+ jsonRecords[i].price +" Ksh &nbsp;&nbsp; <span>per / day</span></div>"
                        view += " <p>Unlimited Free Miles Included</p>"
                        view += " <a href=\"#\" class=\"btn btn-default\">Order now</a> </div>"
                        view += "</div>"
                        view += "</div>"



                    }

                    view += ' </div>';


                    document.getElementById('vehicle-gallery').innerHTML = view;
                }
            }

        }
        ajax.open("GET", "./vehicle/loadCategoryVans", true);
        ajax.send();


    },  loadCategoryGreenCollection:function () {
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
                        // (jsonRecords[i].category);


                    }

                    var view = '<div class="price-table">';

                    for (var i in jsonRecords) {


                        var uploadUrl = 'uploads/';
                        var id = jsonRecords[i].id;
                        view += '<div class="item category6">';
                        view +='<div class="wrapper">'
                        view += "<div class=\"image\"> <img src=" + uploadUrl + jsonRecords[i].photo + " class=\"img-responsive\"></div>";
                        view += " <div class=\"info\">";
                        view +=" <div class=\"wrapper\">";
                        view += "<h4 class='upper pull-left'>" + jsonRecords[i].model + "</h4>";
                        view +="<a href=\"#\" class=\"upper similar\">or similar</a></div>";
                        view +="<p>" + "" + jsonRecords[i].type +" <br>"
                            + jsonRecords[i].seats +" Passengers<br>"
                            + "" + jsonRecords[i].speakers +" <br>"
                            +"" + jsonRecords[i].display +"  <br>"
                            +"Transmission Type: " + jsonRecords[i].gearType+" <br>"
                            +"" + jsonRecords[i].fuel +" (approximate)"
                        view+="</p>"
                        view += "</div>"
                        view += "<div class=\"price-outer\">"
                        view += " <div class=\"price\"> "+ jsonRecords[i].price +" Ksh &nbsp;&nbsp; <span>per / day</span></div>"
                        view += " <p>Unlimited Free Miles Included</p>"
                        view += " <a href=\"#\" class=\"btn btn-default\">Order now</a> </div>"
                        view += "</div>"
                        view += "</div>"



                    }

                    view += ' </div>';


                    document.getElementById('vehicle-gallery').innerHTML = view;
                }
            }

        }
        ajax.open("GET", "./vehicle/loadCategoryGreenCollection", true);
        ajax.send();


    },  loadCategoryDreamCollection:function () {
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
                        // (jsonRecords[i].category);


                    }

                    var view = '<div class="price-table">';

                    for (var i in jsonRecords) {


                        var uploadUrl = 'uploads/';
                        var id = jsonRecords[i].id;
                        view += '<div class="item category3">';
                        view +='<div class="wrapper">'
                        view += "<div class=\"image\"> <img src=" + uploadUrl + jsonRecords[i].photo + " class=\"img-responsive\"></div>";
                        view += " <div class=\"info\">";
                        view +=" <div class=\"wrapper\">";
                        view += "<h4 class='upper pull-left'>" + jsonRecords[i].model + "</h4>";
                        view +="<a href=\"#\" class=\"upper similar\">or similar</a></div>";
                        view +="<p>" + "" + jsonRecords[i].type +" <br>"
                            + jsonRecords[i].seats +" Passengers<br>"
                            + "" + jsonRecords[i].speakers +" <br>"
                            +"" + jsonRecords[i].display +"  <br>"
                            +"Transmission Type: " + jsonRecords[i].gearType+" <br>"
                            +"" + jsonRecords[i].fuel +" (approximate)"
                        view+="</p>"
                        view += "</div>"
                        view += "<div class=\"price-outer\">"
                        view += " <div class=\"price\"> "+ jsonRecords[i].price +" Ksh &nbsp;&nbsp; <span>per / day</span></div>"
                        view += " <p>Unlimited Free Miles Included</p>"
                        view += " <a href=\"#\" class=\"btn btn-default\">Order now</a> </div>"
                        view += "</div>"
                        view += "</div>"



                    }

                    view += ' </div>';


                    document.getElementById('vehicle-gallery').innerHTML = view;
                }
            }

        }
        ajax.open("GET", "./vehicle/loadCategoryDreamCollection", true);
        ajax.send();


    },  loadCategoryFamilyCollection:function () {
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
                        // (jsonRecords[i].category);


                    }

                    var view = '<div class="price-table">';

                    for (var i in jsonRecords) {


                        var uploadUrl = 'uploads/';
                        var id = jsonRecords[i].id;
                        view += '<div class="item category4">';
                        view +='<div class="wrapper">'
                        view += "<div class=\"image\"> <img src=" + uploadUrl + jsonRecords[i].photo + " class=\"img-responsive\"></div>";
                        view += " <div class=\"info\">";
                        view +=" <div class=\"wrapper\">";
                        view += "<h4 class='upper pull-left'>" + jsonRecords[i].model + "</h4>";
                        view +="<a href=\"#\" class=\"upper similar\">or similar</a></div>";
                        view +="<p>" + "" + jsonRecords[i].type +" <br>"
                            + jsonRecords[i].seats +" Passengers<br>"
                            + "" + jsonRecords[i].speakers +" <br>"
                            +"" + jsonRecords[i].display +"  <br>"
                            +"Transmission Type: " + jsonRecords[i].gearType+" <br>"
                            +"" + jsonRecords[i].fuel +" (approximate)"
                        view+="</p>"
                        view += "</div>"
                        view += "<div class=\"price-outer\">"
                        view += " <div class=\"price\"> "+ jsonRecords[i].price +" Ksh &nbsp;&nbsp; <span>per / day</span></div>"
                        view += " <p>Unlimited Free Miles Included</p>"
                        view += " <a href=\"#\" class=\"btn btn-default\">Order now</a> </div>"
                        view += "</div>"
                        view += "</div>"



                    }

                    view += ' </div>';


                    document.getElementById('vehicle-gallery').innerHTML = view;
                }
            }

        }
        ajax.open("GET", "./vehicle/loadCategoryFamilyCollection", true);
        ajax.send();


    },  loadCategoryPrestige:function () {
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
                        // (jsonRecords[i].category);


                    }

                    var view = '<div class="price-table">';

                    for (var i in jsonRecords) {


                        var uploadUrl = 'uploads/';
                        var id = jsonRecords[i].id;
                        view += '<div class="item category5">';
                        view +='<div class="wrapper">'
                        view += "<div class=\"image\"> <img src=" + uploadUrl + jsonRecords[i].photo + " class=\"img-responsive\"></div>";
                        view += " <div class=\"info\">";
                        view +=" <div class=\"wrapper\">";
                        view += "<h4 class='upper pull-left'>" + jsonRecords[i].model + "</h4>";
                        view +="<a href=\"#\" class=\"upper similar\">or similar</a></div>";
                        view +="<p>" + "" + jsonRecords[i].type +" <br>"
                            + jsonRecords[i].seats +" Passengers<br>"
                            + "" + jsonRecords[i].speakers +" <br>"
                            +"" + jsonRecords[i].display +"  <br>"
                            +"Transmission Type: " + jsonRecords[i].gearType+" <br>"
                            +"" + jsonRecords[i].fuel +" (approximate)"
                        view+="</p>"
                        view += "</div>"
                        view += "<div class=\"price-outer\">"
                        view += " <div class=\"price\"> "+ jsonRecords[i].price +" Ksh &nbsp;&nbsp; <span>per / day</span></div>"
                        view += " <p>Unlimited Free Miles Included</p>"
                        view += " <a href=\"#\" class=\"btn btn-default\">Order now</a> </div>"
                        view += "</div>"
                        view += "</div>"



                    }

                    view += ' </div>';


                    document.getElementById('vehicle-gallery').innerHTML = view;
                }
            }

        }
        ajax.open("GET", "./vehicle/loadCategoryPrestige", true);
        ajax.send();


    },

}

function listRoutes(){
    document.getElementById('ajax-content').innerHTML = 'We will load routes here!';
}

(function init(){
    price.loadCar();
})();
