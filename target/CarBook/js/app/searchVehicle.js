/**
 * Created by sammy on 8/22/16.
 */

var searchVehicle = {

    save: function() {

        var ajax = new XMLHttpRequest();


        var pickLOcation = document.getElementById('pickLOcation').value;
        var pickDate = document.getElementById('pickDate').value;
        var returnDate = document.getElementById('returnDate').value;
        var carOption = document.getElementById('carOption').value;

        var params = 'carOption=' + encodeURIComponent(carOption);
        
        console.log(params);
        ajax.open("POST","./vehicles/loadCategory?category="+category ,true);
        ajax.send();
    },

    searchCategory :function () {
        var category = document.getElementById("carOption").value;



        var params = 'category=' + encodeURIComponent(category);
        console.log(params);

        var ajax = new XMLHttpRequest();
        var me = this;
        ajax.onreadystatechange = function () {

            if (ajax.readyState == 4) {
                if (ajax.status == 200) {
                    var response = ajax.responseText;


                    var jsonRecords = JSON.parse(response);





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
                    //window.location="Search.jsp";

                    document.getElementById('slider1').innerHTML = view;



                }


            }
        }
        ajax.open("POST", "./vehicleSearch", true);
        ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        ajax.send(params);
    }
}




